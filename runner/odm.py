"""ODM for the RLITT generator."""

import urllib.parse
from dataclasses import dataclass
from enum import Enum

from bson import ObjectId
from pymongo import MongoClient
from pymongo.collection import Collection
from pymongo.database import Database

from . import config_store as cfg


def get_db(url: str, port: int, username: str, password: str, database_name: str) -> Database:
    """Get a connection to the mongodb.

    Args:
        url: The domain to connect to.
        port: The port to connect to.
        username: The username to use for the connection.
        password: The password to use for the connection.
        database_name: The name of the database to connect to.

    Returns:
        Returns one of a database connection or None.
    """
    if url and port and username and password and database_name:
        username = urllib.parse.quote_plus(username)
        password = urllib.parse.quote_plus(password)
        client = MongoClient(
            f'mongodb://{username}:{password}@{url}:{port}/?authSource=admin&retryWrites=true&w=majority',
            connectTimeoutMS=0,
            # noqa: E501
        )
        return client[database_name]
    raise NameError(
        'DB load error'
    ) from None  # @@@IMPROVEMENT: needs to be updated to exception object


def get_stencil_collection(dbc: Database) -> Collection:
    """Get the stencil collection.

    Args:
        dbc: The mongodb to get the collection from.

    Returns:
        A connection to the stencil collection.
    """
    return dbc[cfg.cfg_dict['tangle-collections']['stencil_col_name']]


def get_arborescent_collection(dbc: Database) -> Collection:
    """Get the arborescent tangle collection.

    Args:
        dbc: The mongodb to get the collection from.

    Returns:
        A connection to the arborescent collection.
    """
    return dbc[cfg.cfg_dict['tangle-collections']['col_name']]


class StencilStateEnum(int, Enum):
    """The enum for states a stencil can occupy.

    Attributes:
        new: The stencil is new.
        started: The stencil is being processed.
        no_headroom: The stencil is fully processed but jobs are not yet created.
        complete: The stencil is fully processed.
    """

    new = 0
    started = 1
    no_headroom = 2
    complete = 3


@dataclass
class StencilCfg:
    """The configuration document for the stencil store.

    Attributes:
        current_completed_tcn: The current largest TCN to be fully generated.
        max_tcn: The maximum TCN to process.
        _id: The ID for the document.
    """

    current_completed_tcn: int
    max_tcn: int
    _id: str


@dataclass
class StencilDB:
    """The shape of a stencil document.

    Attributes:
        _id: The ID for the document.
        rootstock_tcn: The TCN for the rootstock of the stencil.
        scion_tcn: The TCN for the scion of the stencil.
        state: The state of the stencil. This is in terms of StencilStateEnum.
        cursor: The current cursor, a pair of ObjectId for arborescent tangle documents.
    """

    _id: ObjectId
    rootstock_tcn: int
    scion_tcn: int
    state: int
