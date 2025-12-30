"""The faktory client core functionality."""

import time
from collections.abc import Generator

from dacite import from_dict
from pyfaktory import Client, Job, Producer
from pymongo.collection import Collection

from .. import config_store as cfg
from .. import odm


def _open_stencil_filter(tcn: int) -> dict:
    """Generate a mongo filter for open stencils.

    Args:
        tcn: The TCN to filter for

    Returns:
        A mongo filter
    """
    return {
        '$and': [
            {'state': {'$ne': odm.StencilStateEnum.complete}},
            {'state': {'$ne': odm.StencilStateEnum.no_headroom}},
            {'TCN': {'$lte': tcn}},
            {'rootstock_tcn': {'$ne': 0}},
            {'_id': {'$ne': 'config'}},
        ]
    }


def _get_stencil_config(stencil_col: Collection) -> odm.StencilCfg:
    """Get the stencil configuration document.

    Args:
        stencil_col: The stencil collection.

    Returns:
        The configuration document for the given collection.
    """
    stencil = stencil_col.find_one({'_id': 'config'})
    return from_dict(data_class=odm.StencilCfg, data=stencil)


def _paginate_filter(arbor_col: Collection, mongo_filter: dict) -> list[str]:
    """Build a list of page cursors for a mongodb filter.

    Args:
        arbor_col: The collection of arborescent tangles.
        mongo_filter: The filter to paginate

    Returns:
        A list of ID corresponding to the start of pages.

    """
    page_list = []
    cursor = (arbor_col.find_one(mongo_filter, projection={'_id': 1}, sort={'_id': 1}))['_id']
    page_list.append(cursor)
    while tangdb := (
        arbor_col.find_one(
            {'$and': [mongo_filter, {'_id': {'$gte': cursor}}]},
            projection={'_id': 1},
            sort={'_id': 1},
            skip=int(cfg.cfg_dict['tangle-collections']['page_size']),
        )
    ):
        cursor = tangdb['_id']
        page_list.append(tangdb['_id'])
    return page_list


def _process_stencil(
    stencil_col: Collection, arbor_col: Collection, stencil: odm.StencilDB
) -> Generator[Job, None, None]:
    """Process a given stencil into jobs and push to faktory.

    Args:
        stencil_col: The colection of stencils.
        arbor_col: The collection of arborescent tangles.
        stencil: The stencil to process.
    """
    stencil_col.update_one({'_id': stencil._id}, {'$set': {'state': odm.StencilStateEnum.started}})

    tasks = [
        _paginate_filter(arbor_col, {'TCN': stencil.rootstock_tcn}),
        _paginate_filter(arbor_col, {'TCN': stencil.scion_tcn, 'is_good': True}),
    ]

    for root_idx in tasks[0]:
        for scion_idx in tasks[1]:
            job = Job(
                jobtype='arbor_job',
                args=[
                    str(root_idx),
                    stencil.rootstock_tcn,
                    str(scion_idx),
                    stencil.scion_tcn,
                    int(cfg.cfg_dict['tangle-collections']['page_size']),
                ],
                queue='arborescent',
            )
            yield job
    stencil_col.update_one({'_id': stencil._id}, {'$set': {'state': odm.StencilStateEnum.complete}})


def _recovery(
    arbor_col: Collection, stencil_col: Collection, stencil_cfg: odm.StencilCfg, producer: Producer
) -> None:
    """On start recover previous state from stencil collection.

    Args:
        arbor_col: The collection of arborescent tangles.
        stencil_col: The collection of stencils.
        stencil_cfg: The configuration document of the stencil collection.
        producer: The faktory producer.
    """
    for stencildb in stencil_col.find(
        {
            '$and': [
                {
                    '$or': [
                        {'state': odm.StencilStateEnum.new},
                        {'state': odm.StencilStateEnum.started},
                    ]
                },
                {'TCN': stencil_cfg.current_completed_tcn + 1},
            ]
        }
    ):
        stencil = from_dict(data_class=odm.StencilDB, data=stencildb)
        for job in _process_stencil(stencil_col, arbor_col, stencil):
            producer.push(job)


def faktory_producer() -> None:
    """Pyfaktory producer."""
    with Client(
        faktory_url=f'tcp://{cfg.cfg_dict["faktory-connection-info"]["domain"]}:{cfg.cfg_dict["faktory-connection-info"]["port"]}'
    ) as client:
        db_cfg = cfg.cfg_dict['db-connection-info']
        dbc = odm.get_db(
            db_cfg['domain'],
            db_cfg['port'],
            db_cfg['user'],
            db_cfg['password'],
            db_cfg['database'],
        )
        stencil_col = odm.get_stencil_collection(dbc)
        arbor_col = odm.get_arborescent_collection(dbc)
        stencil_cfg = _get_stencil_config(stencil_col)
        producer = Producer(client=client)
        _recovery(arbor_col, stencil_col, stencil_cfg, producer)
        while True:
            server_info = (client.info())['faktory']

            queue_count = (
                server_info['sets']['dead']
                + server_info['sets']['retries']
                + server_info['sets']['scheduled']
                + server_info['sets']['working']
            )
            if 'arborescent' in server_info['queues']:
                queue_count += server_info['queues']['arborescent']
            stencil_count = stencil_col.count_documents(
                _open_stencil_filter(stencil_cfg.current_completed_tcn + 1)
            )
            if queue_count == 0 and stencil_count == 0:
                stencil_cfg.current_completed_tcn += 1
                stencil_col.update_one(
                    {'_id': 'config'},
                    {'$set': {'current_completed_tcn': stencil_cfg.current_completed_tcn}},
                )
                producer = Producer(client=client)
                for stencildb in stencil_col.find(
                    _open_stencil_filter(stencil_cfg.current_completed_tcn + 1)
                ):
                    stencil = from_dict(data_class=odm.StencilDB, data=stencildb)
                    for job in _process_stencil(stencil_col, arbor_col, stencil):
                        producer.push(job)

            time.sleep(3)
