"""ODM for the RLITT generator."""

import urllib.parse

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


def get_arborescent_collection(dbc: Database) -> Collection:
    """Get the arborescent tangle collection.

    Args:
        dbc: The mongodb to get the collection from.

    Returns:
        A connection to the arborescent collection.
    """
    return dbc[cfg.cfg_dict['tangle-collections']['col_name']]
