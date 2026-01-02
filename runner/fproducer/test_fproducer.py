from pathlib import Path

import mongomock
import pymongo
import pytest
from dacite import from_dict

from .. import config_store as cfg
from .. import odm
from . import fproducer


@mongomock.patch(servers=(('localhost', 27017),))
def test_valid():
    assert True
