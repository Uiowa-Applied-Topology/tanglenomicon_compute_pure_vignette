"""The faktory client core functionality."""

import time
from collections.abc import Generator

from dacite import from_dict
from pyfaktory import Client, Job, Producer
from pymongo.collection import Collection

from .. import config_store as cfg
from .. import odm


def _paginate_filter(arbor_col: Collection, mongo_filter: dict) -> Generator[str, None, None]:
    """Build a list of page cursors for a MongoDB filter.

    Args:
        arbor_col: The collection of arborescent tangles.
        mongo_filter: The filter to paginate

    Returns:
        A list of ID corresponding to the start of pages.

    """
    page_list = []
    if db_cursor := arbor_col.find_one(mongo_filter, projection={'_id': 1}, sort={'_id': 1}):
        cursor = db_cursor['_id']
    else:
        raise Exception('@@@TODO: Add an Exception')
    yield cursor
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
        yield tangdb['_id']


def _process_tangles(arbor_col: Collection, queue: str) -> Generator[Job, None, None]:
    """Process a given stencil into jobs and push to faktory.

    Args:
        stencil_col: The colection of stencils.
        arbor_col: The collection of arborescent tangles.
        stencil: The stencil to process.
    """
    for page_idx in _paginate_filter(arbor_col, {}):
        job = Job(
            jobtype=cfg.cfg_dict['faktory-connection-info']['queue'],
            args=[
                str(page_idx),
                int(cfg.cfg_dict['tangle-collections']['page_size']),
            ],
            queue=queue,
        )
        yield job


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
        arbor_col = odm.get_arborescent_collection(dbc)
        producer = Producer(client=client)
        for job in _process_tangles(arbor_col, cfg.cfg_dict['faktory-connection-info']['queue']):
            producer.push(job)
