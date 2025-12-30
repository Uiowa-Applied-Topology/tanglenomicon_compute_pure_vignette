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
    cfg.cfg_dict = {'tangle-collections': {'page_size': 2}}
    mongo_client = pymongo.MongoClient('mongodb://localhost:27017')
    dbc = mongo_client['test_tanglenomicon']
    arbor_col = dbc['arbor']
    arbor_data = [
        {'notation': 'i[0]', 'TCN': 0, 'is_good': True, 'positivity': 'neutral'},
        {'notation': 'i[1]', 'TCN': 0, 'is_good': True, 'positivity': 'neutral'},
        {'notation': 'i[2]', 'TCN': 0, 'is_good': True, 'positivity': 'neutral'},
        {'notation': 'i[3]', 'TCN': 0, 'is_good': True, 'positivity': 'neutral'},
        {'notation': 'i[4]', 'TCN': 0, 'is_good': True, 'positivity': 'neutral'},
        {'notation': 'i[5]', 'TCN': 0, 'is_good': True, 'positivity': 'neutral'},
        {'notation': 'i[10]', 'TCN': 1, 'is_good': True, 'positivity': 'neutral'},
        {'notation': 'i[11]', 'TCN': 1, 'is_good': True, 'positivity': 'neutral'},
        {'notation': 'i[12]', 'TCN': 1, 'is_good': True, 'positivity': 'neutral'},
        {'notation': 'i[13]', 'TCN': 1, 'is_good': True, 'positivity': 'neutral'},
        {'notation': 'i[14]', 'TCN': 1, 'is_good': True, 'positivity': 'neutral'},
        {'notation': 'i[15]', 'TCN': 1, 'is_good': True, 'positivity': 'neutral'},
    ]
    arbor_col.insert_many(arbor_data)
    stencil_col = dbc['stencil']
    stencil_data = [{'rootstock_tcn': 0, 'scion_tcn': 1, 'TCN': 1, 'state': 0}]
    stencil_col.insert_many(stencil_data)
    stencil = from_dict(data_class=odm.StencilDB, data=stencil_col.find_one())
    assert len([job for job in fproducer._process_stencil(stencil_col, arbor_col, stencil)]) == 9
    for sten in stencil_col.find():
        print(sten)
    stencil = from_dict(data_class=odm.StencilDB, data=stencil_col.find_one())
    assert stencil.state == odm.StencilStateEnum.complete


@mongomock.patch(servers=(('localhost', 27017),))
def test_empty_stencil_col():
    cfg.cfg_dict = {'tangle-collections': {'page_size': 2}}
    mongo_client = pymongo.MongoClient('mongodb://localhost:27017')
    dbc = mongo_client['test_tanglenomicon']
    arbor_col = dbc['arbor']
    arbor_data = [
        {'notation': 'i[0]', 'TCN': 0, 'is_good': True, 'positivity': 'neutral'},
        {'notation': 'i[1]', 'TCN': 0, 'is_good': True, 'positivity': 'neutral'},
        {'notation': 'i[2]', 'TCN': 0, 'is_good': True, 'positivity': 'neutral'},
        {'notation': 'i[3]', 'TCN': 0, 'is_good': True, 'positivity': 'neutral'},
        {'notation': 'i[4]', 'TCN': 0, 'is_good': True, 'positivity': 'neutral'},
        {'notation': 'i[5]', 'TCN': 0, 'is_good': True, 'positivity': 'neutral'},
        {'notation': 'i[10]', 'TCN': 1, 'is_good': True, 'positivity': 'neutral'},
        {'notation': 'i[11]', 'TCN': 1, 'is_good': True, 'positivity': 'neutral'},
        {'notation': 'i[12]', 'TCN': 1, 'is_good': True, 'positivity': 'neutral'},
        {'notation': 'i[13]', 'TCN': 1, 'is_good': True, 'positivity': 'neutral'},
        {'notation': 'i[14]', 'TCN': 1, 'is_good': True, 'positivity': 'neutral'},
        {'notation': 'i[15]', 'TCN': 1, 'is_good': True, 'positivity': 'neutral'},
    ]
    arbor_col.insert_many(arbor_data)
    stencil_col = dbc['stencil']
    stencil = None
    try:
        li = [job for job in fproducer._process_stencil(stencil_col, arbor_col, stencil)]
        print(li)
    except Exception:
        assert True


@mongomock.patch(servers=(('localhost', 27017),))
def test_empty_arbor_col():
    cfg.cfg_dict = {'tangle-collections': {'page_size': 2}}
    mongo_client = pymongo.MongoClient('mongodb://localhost:27017')
    dbc = mongo_client['test_tanglenomicon']
    arbor_col = dbc['arbor']
    stencil_col = dbc['stencil']
    stencil_data = [{'rootstock_tcn': 0, 'scion_tcn': 1, 'TCN': 1, 'state': 0}]
    stencil_col.insert_many(stencil_data)
    stencil = from_dict(data_class=odm.StencilDB, data=stencil_col.find_one())
    try:
        li = [job for job in fproducer._process_stencil(stencil_col, arbor_col, stencil)]
        print(li)
    except Exception:
        assert True
