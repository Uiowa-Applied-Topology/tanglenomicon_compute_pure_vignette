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
        _rt_idx: ID of the start of the rootstock page.
        _rt_tcn: TCN of the rootstocks.
        _sci_idx: ID of the start of the scion page.
        _sci_tcn: TCN of the scions.
        _tang_list: Dictionary of the generated tangles and attributes.
        _notes: Set of generated tangles, used for generating non-good trees.
    """

    _arbor_col: Collection
    _rt_idx: str
    _rt_tcn: int
    _sci_idx: str
    _sci_tcn: int
    _tang_list: dict[str, dict]
    _notes: set[str]

    def __init__(
        self,
        arbor_col: Collection,
        rt_idx: str,
        rt_tcn: int,
        sci_idx: str,
        sci_tcn: int,
        page_size: int,
    ) -> None:
        """Init the worker.

        Args:
            arbor_col: The arborescent tangle collection.
            rt_idx: ID of the start of the rootstock page.
            rt_tcn: TCN of the rootstocks.
            sci_idx: ID of the start of the scion page.
            sci_tcn: TCN of the scions.
            page_size: The length of a page for the job.
        """
        self._arbor_col = arbor_col
        self._rt_idx = rt_idx
        self._rt_tcn = rt_tcn
        self._sci_idx = sci_idx
        self._sci_tcn = sci_tcn
        self._tang_list = {}
        self._page_size = page_size
        self._notes = set()

    def _batch_write(self):
        """Batch write the generated data to the Mongodb collection."""
        if self._tang_list and self._arbor_col is not None:
            writes = []
            for item in self._tang_list:
                writes.append(
                    UpdateOne(
                        {'notation': item},
                        {'$setOnInsert': self._tang_list[item]},
                        upsert=True,
                    )
                )
            self._arbor_col.bulk_write(writes, ordered=False)
            self._tang_list = {}

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
            # Add notation to notes list for un-goodifying
            if key not in self._notes:
                self._notes.add(key)

            if key not in self._tang_list:
                self._tang_list[key] = {
                    'notation': key,
                    'TCN': self._rt_tcn + self._sci_tcn,
                }

            if index == 'is_good':
                if value == 'true':
                    self._tang_list[key][index] = True
                else:
                    self._tang_list[key][index] = False
            elif index == 'positivity':
                self._tang_list[key][index] = value

        # End internal function def ##############################################################

        # Get list of rootstocks
        rootstocks = list(
            self._arbor_col.find(
                {'TCN': self._rt_tcn, '_id': {'$gte': ObjectId(self._rt_idx)}},
                projection={'notation': 1, 'positivity': 1},
                sort={'_id': 1},
            ).limit(self._page_size)
        )

        # Process rootstocks into positivity equivalence. This reduces unneeded computation.
        rs_by_positivity = {'positive': [], 'negative': [], 'neutral': []}
        for rootstock in rootstocks:
            rs_by_positivity[rootstock['positivity']].append(rootstock['notation'])

        # Get list of good scions
        scions = list(
            self._arbor_col.find(
                {
                    'TCN': self._sci_tcn,
                    'is_good': True,
                    '_id': {'$gte': ObjectId(self._sci_idx)},
                },
                projection={'notation': 1, 'positivity': 1},
                sort={'_id': 1},
            ).limit(self._page_size)
        )

        # Process scions into positivity equivalence. This reduces unneeded computation.
        sci_by_positivity = {'positive': [], 'negative': [], 'neutral': []}
        for scion in scions:
            sci_by_positivity[scion['positivity']].append(scion['notation'])

        # Process rootstocks and scions into combinations that can generate canonical trees.
        for job in [
            (rs_by_positivity['positive'], sci_by_positivity['positive']),
            (rs_by_positivity['positive'], sci_by_positivity['neutral']),
            (rs_by_positivity['negative'], sci_by_positivity['negative']),
            (rs_by_positivity['negative'], sci_by_positivity['neutral']),
            (rs_by_positivity['neutral'], sci_by_positivity['positive']),
            (rs_by_positivity['neutral'], sci_by_positivity['negative']),
            (rs_by_positivity['neutral'], sci_by_positivity['neutral']),
        ]:
            if job[0] and job[1]:
                if lib_wrapper.run(job[0], job[1], _write_callback):
                    self._batch_write()
                else:
                    raise NameError(
                        'Generation went wrong'
                    ) from None  # @@@IMPROVEMENT: needs to be updated to exception object

        # un-goodifying everything we generated
        if lib_wrapper.run(['i[0]'], list(self._notes), _write_callback):
            self._batch_write()
        else:
            raise NameError(
                'Generation Went Wrong'
            ) from None  # @@@IMPROVEMENT: needs to be updated to exception object
        self._batch_write()


def faktory_job(rt_idx: str, rt_tcn: int, sci_idx: str, sci_tcn: int, page_size: int):
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
    job = Worker(odm.get_arborescent_collection(dbc), rt_idx, rt_tcn, sci_idx, sci_tcn, page_size)
    job.process()
