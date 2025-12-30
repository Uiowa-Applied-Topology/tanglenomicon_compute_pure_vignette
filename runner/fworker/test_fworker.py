# from pathlib import Path
#
# import bson
# import mongomock
# import pymongo
# import pytest
# from dacite import from_dict
#
# from .. import config_store as cfg
# from .. import odm
# from . import fworker

############################################################
# mongomock has some issues with bulk writing unit tests here
# are marked for TODO see:
# https://github.com/mongomock/mongomock/issues/912
############################################################
# @mongomock.patch(servers=(('localhost', 27017),))
# def test_valid():
#     cfg.cfg_dict = {'tangle-collections': {'page_size': 2}}
#     mongo_client = pymongo.MongoClient('mongodb://localhost:27017')
#     dbc = mongo_client['test_tanglenomicon']
#     arbor_col = dbc['arbor']
#     arbor_data = [
#         {
#             '_id': bson.ObjectId('000000000000000000000000'),
#             'notation': 'i[0]',
#             'TCN': 0,
#             'is_good': True,
#             'positivity': 'neutral',
#         },
#         {
#             '_id': bson.ObjectId('000000000000000000000001'),
#             'notation': 'i[1]',
#             'TCN': 0,
#             'is_good': True,
#             'positivity': 'neutral',
#         },
#         {
#             '_id': bson.ObjectId('000000000000000000000002'),
#             'notation': 'i[10]',
#             'TCN': 1,
#             'is_good': True,
#             'positivity': 'neutral',
#         },
#         {
#             '_id': bson.ObjectId('000000000000000000000003'),
#             'notation': 'i[11]',
#             'TCN': 1,
#             'is_good': True,
#             'positivity': 'neutral',
#         },
#     ]
#     arbor_col.insert_many(arbor_data)
#     wrkr = fworker.Worker(
#         arbor_col, '000000000000000000000000', 0, '000000000000000000000002', 1, 2
#     )
#     wrkr.process()
#     assert arbor_col.find_one({'notation': 'i[0 10]'})
#     assert arbor_col.find_one({'notation': 'i[0 11]'})
#     assert arbor_col.find_one({'notation': 'i[1 10]'})
#     assert arbor_col.find_one({'notation': 'i[1 11]'})
