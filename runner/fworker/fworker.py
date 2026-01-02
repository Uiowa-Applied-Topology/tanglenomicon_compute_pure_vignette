"""The faktory worker core functionality."""

from bson import ObjectId
from pymongo import UpdateOne
from pymongo.collection import Collection

from .. import config_store as cfg
from .. import odm
from ..lib_wrapper import lib_wrapper


class Worker:
    """Class defines an atomic worker.

    Attributes:
        _arbor_col: Mongodb collection of arborescent tangles.
        _tangle_idx: ID of the start of the page.
        _tang_list: Dictionary of the generated tangles and attributes.
        _new_field: The new field name for the computed data.
        _page_size: The size of a page of tangles.
    """

    _arbor_col: Collection
    _tangle_idx: str
    _tang_list: list[dict]
    _new_field: str
    _page_size: int

    def __init__(
        self,
        arbor_col: Collection,
        tangle_idx: str,
        page_size: int,
        new_field: str,
    ) -> None:
        """Init the worker.

        Args:
            arbor_col: The arborescent tangle collection.
            tangle_idx: ID of the start of the page.
            page_size: The length of a page for the job.
            new_field: The new field name for the computed data.
        """
        self._arbor_col = arbor_col
        self._tangle_idx = tangle_idx
        self._tang_list = []
        self._page_size = page_size
        self._new_field = new_field

    def _batch_write(self):
        """Batch write the generated data to the Mongodb collection."""
        if self._tang_list and self._arbor_col is not None:
            writes = []
            for item in self._tang_list:
                writes.append(
                    UpdateOne(
                        {'notation': item['_id']},
                        {'$set': {self._new_field: item['data']}},
                    )
                )
            self._arbor_col.bulk_write(writes, ordered=False)
            self._tang_list = []

    def process(self) -> None:
        """Process the job."""

        # Start internal function def ############################################################
        def _write_callback(key: str, index: str, value: str) -> None:
            """Write callback function for cython functionality.

            Args:
                key: The notation for the tree.
                index: The name of the attribute to store.
                value: The value of the attribute.
            """
            self._tang_list.append({'_id': key, 'data': value})

        # End internal function def ##############################################################

        # Get list of tangles

        for tangle in list(
            self._arbor_col.find(
                {'_id': {'$gte': ObjectId(self._tangle_idx)}},
                projection={'_id': 1, 'notation': 1},
                sort={'_id': 1},
            ).limit(self._page_size)
        ):
            lib_wrapper.run(tangle['notation'], _write_callback)
        self._batch_write()


def faktory_job(tangle_idx: str, page_size: int):
    """Pyfaktory worker callback for generating RLITT.

    Args:
        rt_idx: ID of the start of the rootstock page.
        rt_tcn: TCN of the rootstocks.
        sci_idx: ID of the start of the scion page.
        sci_tcn: TCN of the scions.
        page_size: The size of the page of tangles to retrieve.
    """
    db_cfg = cfg.cfg_dict['db-connection-info']
    dbc = odm.get_db(
        db_cfg['domain'],
        db_cfg['port'],
        db_cfg['user'],
        db_cfg['password'],
        db_cfg['database'],
    )
    job = Worker(
        odm.get_arborescent_collection(dbc),
        tangle_idx,
        page_size,
        cfg.cfg_dict['tangle-collections']['new_field'],
    )
    job.process()