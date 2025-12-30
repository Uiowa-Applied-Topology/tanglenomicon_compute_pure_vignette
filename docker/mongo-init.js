conn = new Mongo();
db = conn.getDB("tanglenomicon");

let res = [
db.arborescent_tangles.insertMany([
    {
        "notation": "i[0]",
        "TCN": 0,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[0 0]",
        "TCN": -1,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[1]",
        "TCN": 1,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-1]",
        "TCN": 1,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[2]",
        "TCN": 2,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-2]",
        "TCN": 2,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[3]",
        "TCN": 3,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-3]",
        "TCN": 3,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[4]",
        "TCN": 4,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-4]",
        "TCN": 4,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[5]",
        "TCN": 5,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-5]",
        "TCN": 5,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[6]",
        "TCN": 6,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-6]",
        "TCN": 6,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[7]",
        "TCN": 7,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-7]",
        "TCN": 7,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[8]",
        "TCN": 8,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-8]",
        "TCN": 8,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[9]",
        "TCN": 9,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-9]",
        "TCN": 9,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[10]",
        "TCN": 10,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-10]",
        "TCN": 10,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[11]",
        "TCN": 11,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-11]",
        "TCN": 11,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[12]",
        "TCN": 12,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-12]",
        "TCN": 12,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[13]",
        "TCN": 13,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-13]",
        "TCN": 13,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[14]",
        "TCN": 14,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-14]",
        "TCN": 14,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[15]",
        "TCN": 15,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-15]",
        "TCN": 15,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[16]",
        "TCN": 16,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-16]",
        "TCN": 16,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[17]",
        "TCN": 17,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-17]",
        "TCN": 17,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[18]",
        "TCN": 18,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-18]",
        "TCN": 18,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[19]",
        "TCN": 19,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-19]",
        "TCN": 19,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[20]",
        "TCN": 20,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-20]",
        "TCN": 20,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[21]",
        "TCN": 21,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-21]",
        "TCN": 21,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[22]",
        "TCN": 22,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-22]",
        "TCN": 22,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[23]",
        "TCN": 23,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-23]",
        "TCN": 23,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[24]",
        "TCN": 24,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-24]",
        "TCN": 24,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[25]",
        "TCN": 25,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-25]",
        "TCN": 25,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[26]",
        "TCN": 26,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-26]",
        "TCN": 26,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[27]",
        "TCN": 27,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-27]",
        "TCN": 27,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[28]",
        "TCN": 28,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-28]",
        "TCN": 28,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[29]",
        "TCN": 29,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[-29]",
        "TCN": 29,
        "is_good": true,
        "positivity": "neutral"
    },
    {
        "notation": "i[2 0]",
        "TCN": 2,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-2 0]",
        "TCN": 2,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[3 0]",
        "TCN": 3,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-3 0]",
        "TCN": 3,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[4 0]",
        "TCN": 4,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-4 0]",
        "TCN": 4,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[5 0]",
        "TCN": 5,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-5 0]",
        "TCN": 5,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[6 0]",
        "TCN": 6,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-6 0]",
        "TCN": 6,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[7 0]",
        "TCN": 7,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-7 0]",
        "TCN": 7,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[8 0]",
        "TCN": 8,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-8 0]",
        "TCN": 8,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[9 0]",
        "TCN": 9,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-9 0]",
        "TCN": 9,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[10 0]",
        "TCN": 10,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-10 0]",
        "TCN": 10,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[11 0]",
        "TCN": 11,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-11 0]",
        "TCN": 11,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[12 0]",
        "TCN": 12,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-12 0]",
        "TCN": 12,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[13 0]",
        "TCN": 13,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-13 0]",
        "TCN": 13,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[14 0]",
        "TCN": 14,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-14 0]",
        "TCN": 14,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[15 0]",
        "TCN": 15,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-15 0]",
        "TCN": 15,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[16 0]",
        "TCN": 16,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-16 0]",
        "TCN": 16,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[17 0]",
        "TCN": 17,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-17 0]",
        "TCN": 17,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[18 0]",
        "TCN": 18,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-18 0]",
        "TCN": 18,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[19 0]",
        "TCN": 19,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-19 0]",
        "TCN": 19,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[20 0]",
        "TCN": 20,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-20 0]",
        "TCN": 20,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[21 0]",
        "TCN": 21,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-21 0]",
        "TCN": 21,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[22 0]",
        "TCN": 22,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-22 0]",
        "TCN": 22,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[23 0]",
        "TCN": 23,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-23 0]",
        "TCN": 23,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[24 0]",
        "TCN": 24,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-24 0]",
        "TCN": 24,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[25 0]",
        "TCN": 25,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-25 0]",
        "TCN": 25,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[26 0]",
        "TCN": 26,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-26 0]",
        "TCN": 26,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[27 0]",
        "TCN": 27,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-27 0]",
        "TCN": 27,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[28 0]",
        "TCN": 28,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-28 0]",
        "TCN": 28,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[29 0]",
        "TCN": 29,
        "is_good": false,
        "positivity": "neutral"
    },
    {
        "notation": "i[-29 0]",
        "TCN": 29,
        "is_good": false,
        "positivity": "neutral"
    }
]),
db.arborescent_tangles.createIndex({"notation":1},  {unique: true}),
db.arborescent_tangles.createIndex({"TCN":1,"is_good":1}),
db.arborescent_tangles.createIndex({"TCN":1,"is_good":1,"_id":1}),
db.arborescent_stencils.insertMany([
    {
        "_id": "config",
        "current_completed_tcn": 1,
        "max_tcn": 26
    },
    { "state": 0, "rootstock_tcn": 1, "scion_tcn": 2, "TCN": 3 },
    { "state": 0, "rootstock_tcn": 1, "scion_tcn": 3, "TCN": 4 },
    { "state": 0, "rootstock_tcn": 2, "scion_tcn": 2, "TCN": 4 },
    { "state": 0, "rootstock_tcn": 1, "scion_tcn": 4, "TCN": 5 },
    { "state": 0, "rootstock_tcn": 2, "scion_tcn": 3, "TCN": 5 },
    { "state": 0, "rootstock_tcn": 3, "scion_tcn": 2, "TCN": 5 },
    { "state": 0, "rootstock_tcn": 1, "scion_tcn": 5, "TCN": 6 },
    { "state": 0, "rootstock_tcn": 2, "scion_tcn": 4, "TCN": 6 },
    { "state": 0, "rootstock_tcn": 3, "scion_tcn": 3, "TCN": 6 },
    { "state": 0, "rootstock_tcn": 4, "scion_tcn": 2, "TCN": 6 },
    { "state": 0, "rootstock_tcn": 1, "scion_tcn": 6, "TCN": 7 },
    { "state": 0, "rootstock_tcn": 2, "scion_tcn": 5, "TCN": 7 },
    { "state": 0, "rootstock_tcn": 3, "scion_tcn": 4, "TCN": 7 },
    { "state": 0, "rootstock_tcn": 4, "scion_tcn": 3, "TCN": 7 },
    { "state": 0, "rootstock_tcn": 5, "scion_tcn": 2, "TCN": 7 },
    { "state": 0, "rootstock_tcn": 1, "scion_tcn": 7, "TCN": 8 },
    { "state": 0, "rootstock_tcn": 2, "scion_tcn": 6, "TCN": 8 },
    { "state": 0, "rootstock_tcn": 3, "scion_tcn": 5, "TCN": 8 },
    { "state": 0, "rootstock_tcn": 4, "scion_tcn": 4, "TCN": 8 },
    { "state": 0, "rootstock_tcn": 5, "scion_tcn": 3, "TCN": 8 },
    { "state": 0, "rootstock_tcn": 6, "scion_tcn": 2, "TCN": 8 },
    { "state": 0, "rootstock_tcn": 1, "scion_tcn": 8, "TCN": 9 },
    { "state": 0, "rootstock_tcn": 2, "scion_tcn": 7, "TCN": 9 },
    { "state": 0, "rootstock_tcn": 3, "scion_tcn": 6, "TCN": 9 },
    { "state": 0, "rootstock_tcn": 4, "scion_tcn": 5, "TCN": 9 },
    { "state": 0, "rootstock_tcn": 5, "scion_tcn": 4, "TCN": 9 },
    { "state": 0, "rootstock_tcn": 6, "scion_tcn": 3, "TCN": 9 },
    { "state": 0, "rootstock_tcn": 7, "scion_tcn": 2, "TCN": 9 },
    { "state": 0, "rootstock_tcn": 1, "scion_tcn": 9, "TCN": 10 },
    { "state": 0, "rootstock_tcn": 2, "scion_tcn": 8, "TCN": 10 },
    { "state": 0, "rootstock_tcn": 3, "scion_tcn": 7, "TCN": 10 },
    { "state": 0, "rootstock_tcn": 4, "scion_tcn": 6, "TCN": 10 },
    { "state": 0, "rootstock_tcn": 5, "scion_tcn": 5, "TCN": 10 },
    { "state": 0, "rootstock_tcn": 6, "scion_tcn": 4, "TCN": 10 },
    { "state": 0, "rootstock_tcn": 7, "scion_tcn": 3, "TCN": 10 },
    { "state": 0, "rootstock_tcn": 8, "scion_tcn": 2, "TCN": 10 },
    { "state": 0, "rootstock_tcn": 1, "scion_tcn": 10, "TCN": 11 },
    { "state": 0, "rootstock_tcn": 2, "scion_tcn": 9, "TCN": 11 },
    { "state": 0, "rootstock_tcn": 3, "scion_tcn": 8, "TCN": 11 },
    { "state": 0, "rootstock_tcn": 4, "scion_tcn": 7, "TCN": 11 },
    { "state": 0, "rootstock_tcn": 5, "scion_tcn": 6, "TCN": 11 },
    { "state": 0, "rootstock_tcn": 6, "scion_tcn": 5, "TCN": 11 },
    { "state": 0, "rootstock_tcn": 7, "scion_tcn": 4, "TCN": 11 },
    { "state": 0, "rootstock_tcn": 8, "scion_tcn": 3, "TCN": 11 },
    { "state": 0, "rootstock_tcn": 9, "scion_tcn": 2, "TCN": 11 },
    { "state": 0, "rootstock_tcn": 1, "scion_tcn": 11, "TCN": 12 },
    { "state": 0, "rootstock_tcn": 2, "scion_tcn": 10, "TCN": 12 },
    { "state": 0, "rootstock_tcn": 3, "scion_tcn": 9, "TCN": 12 },
    { "state": 0, "rootstock_tcn": 4, "scion_tcn": 8, "TCN": 12 },
    { "state": 0, "rootstock_tcn": 5, "scion_tcn": 7, "TCN": 12 },
    { "state": 0, "rootstock_tcn": 6, "scion_tcn": 6, "TCN": 12 },
    { "state": 0, "rootstock_tcn": 7, "scion_tcn": 5, "TCN": 12 },
    { "state": 0, "rootstock_tcn": 8, "scion_tcn": 4, "TCN": 12 },
    { "state": 0, "rootstock_tcn": 9, "scion_tcn": 3, "TCN": 12 },
    { "state": 0, "rootstock_tcn": 10, "scion_tcn": 2, "TCN": 12 },
    { "state": 0, "rootstock_tcn": 1, "scion_tcn": 12, "TCN": 13 },
    { "state": 0, "rootstock_tcn": 2, "scion_tcn": 11, "TCN": 13 },
    { "state": 0, "rootstock_tcn": 3, "scion_tcn": 10, "TCN": 13 },
    { "state": 0, "rootstock_tcn": 4, "scion_tcn": 9, "TCN": 13 },
    { "state": 0, "rootstock_tcn": 5, "scion_tcn": 8, "TCN": 13 },
    { "state": 0, "rootstock_tcn": 6, "scion_tcn": 7, "TCN": 13 },
    { "state": 0, "rootstock_tcn": 7, "scion_tcn": 6, "TCN": 13 },
    { "state": 0, "rootstock_tcn": 8, "scion_tcn": 5, "TCN": 13 },
    { "state": 0, "rootstock_tcn": 9, "scion_tcn": 4, "TCN": 13 },
    { "state": 0, "rootstock_tcn": 10, "scion_tcn": 3, "TCN": 13 },
    { "state": 0, "rootstock_tcn": 11, "scion_tcn": 2, "TCN": 13 },
    { "state": 0, "rootstock_tcn": 1, "scion_tcn": 13, "TCN": 14 },
    { "state": 0, "rootstock_tcn": 2, "scion_tcn": 12, "TCN": 14 },
    { "state": 0, "rootstock_tcn": 3, "scion_tcn": 11, "TCN": 14 },
    { "state": 0, "rootstock_tcn": 4, "scion_tcn": 10, "TCN": 14 },
    { "state": 0, "rootstock_tcn": 5, "scion_tcn": 9, "TCN": 14 },
    { "state": 0, "rootstock_tcn": 6, "scion_tcn": 8, "TCN": 14 },
    { "state": 0, "rootstock_tcn": 7, "scion_tcn": 7, "TCN": 14 },
    { "state": 0, "rootstock_tcn": 8, "scion_tcn": 6, "TCN": 14 },
    { "state": 0, "rootstock_tcn": 9, "scion_tcn": 5, "TCN": 14 },
    { "state": 0, "rootstock_tcn": 10, "scion_tcn": 4, "TCN": 14 },
    { "state": 0, "rootstock_tcn": 11, "scion_tcn": 3, "TCN": 14 },
    { "state": 0, "rootstock_tcn": 12, "scion_tcn": 2, "TCN": 14 },
    { "state": 0, "rootstock_tcn": 1, "scion_tcn": 14, "TCN": 15 },
    { "state": 0, "rootstock_tcn": 2, "scion_tcn": 13, "TCN": 15 },
    { "state": 0, "rootstock_tcn": 3, "scion_tcn": 12, "TCN": 15 },
    { "state": 0, "rootstock_tcn": 4, "scion_tcn": 11, "TCN": 15 },
    { "state": 0, "rootstock_tcn": 5, "scion_tcn": 10, "TCN": 15 },
    { "state": 0, "rootstock_tcn": 6, "scion_tcn": 9, "TCN": 15 },
    { "state": 0, "rootstock_tcn": 7, "scion_tcn": 8, "TCN": 15 },
    { "state": 0, "rootstock_tcn": 8, "scion_tcn": 7, "TCN": 15 },
    { "state": 0, "rootstock_tcn": 9, "scion_tcn": 6, "TCN": 15 },
    { "state": 0, "rootstock_tcn": 10, "scion_tcn": 5, "TCN": 15 },
    { "state": 0, "rootstock_tcn": 11, "scion_tcn": 4, "TCN": 15 },
    { "state": 0, "rootstock_tcn": 12, "scion_tcn": 3, "TCN": 15 },
    { "state": 0, "rootstock_tcn": 13, "scion_tcn": 2, "TCN": 15 },
    { "state": 0, "rootstock_tcn": 1, "scion_tcn": 15, "TCN": 16 },
    { "state": 0, "rootstock_tcn": 2, "scion_tcn": 14, "TCN": 16 },
    { "state": 0, "rootstock_tcn": 3, "scion_tcn": 13, "TCN": 16 },
    { "state": 0, "rootstock_tcn": 4, "scion_tcn": 12, "TCN": 16 },
    { "state": 0, "rootstock_tcn": 5, "scion_tcn": 11, "TCN": 16 },
    { "state": 0, "rootstock_tcn": 6, "scion_tcn": 10, "TCN": 16 },
    { "state": 0, "rootstock_tcn": 7, "scion_tcn": 9, "TCN": 16 },
    { "state": 0, "rootstock_tcn": 8, "scion_tcn": 8, "TCN": 16 },
    { "state": 0, "rootstock_tcn": 9, "scion_tcn": 7, "TCN": 16 },
    { "state": 0, "rootstock_tcn": 10, "scion_tcn": 6, "TCN": 16 },
    { "state": 0, "rootstock_tcn": 11, "scion_tcn": 5, "TCN": 16 },
    { "state": 0, "rootstock_tcn": 12, "scion_tcn": 4, "TCN": 16 },
    { "state": 0, "rootstock_tcn": 13, "scion_tcn": 3, "TCN": 16 },
    { "state": 0, "rootstock_tcn": 14, "scion_tcn": 2, "TCN": 16 },
    { "state": 0, "rootstock_tcn": 1, "scion_tcn": 16, "TCN": 17 },
    { "state": 0, "rootstock_tcn": 2, "scion_tcn": 15, "TCN": 17 },
    { "state": 0, "rootstock_tcn": 3, "scion_tcn": 14, "TCN": 17 },
    { "state": 0, "rootstock_tcn": 4, "scion_tcn": 13, "TCN": 17 },
    { "state": 0, "rootstock_tcn": 5, "scion_tcn": 12, "TCN": 17 },
    { "state": 0, "rootstock_tcn": 6, "scion_tcn": 11, "TCN": 17 },
    { "state": 0, "rootstock_tcn": 7, "scion_tcn": 10, "TCN": 17 },
    { "state": 0, "rootstock_tcn": 8, "scion_tcn": 9, "TCN": 17 },
    { "state": 0, "rootstock_tcn": 9, "scion_tcn": 8, "TCN": 17 },
    { "state": 0, "rootstock_tcn": 10, "scion_tcn": 7, "TCN": 17 },
    { "state": 0, "rootstock_tcn": 11, "scion_tcn": 6, "TCN": 17 },
    { "state": 0, "rootstock_tcn": 12, "scion_tcn": 5, "TCN": 17 },
    { "state": 0, "rootstock_tcn": 13, "scion_tcn": 4, "TCN": 17 },
    { "state": 0, "rootstock_tcn": 14, "scion_tcn": 3, "TCN": 17 },
    { "state": 0, "rootstock_tcn": 15, "scion_tcn": 2, "TCN": 17 },
    { "state": 0, "rootstock_tcn": 1, "scion_tcn": 17, "TCN": 18 },
    { "state": 0, "rootstock_tcn": 2, "scion_tcn": 16, "TCN": 18 },
    { "state": 0, "rootstock_tcn": 3, "scion_tcn": 15, "TCN": 18 },
    { "state": 0, "rootstock_tcn": 4, "scion_tcn": 14, "TCN": 18 },
    { "state": 0, "rootstock_tcn": 5, "scion_tcn": 13, "TCN": 18 },
    { "state": 0, "rootstock_tcn": 6, "scion_tcn": 12, "TCN": 18 },
    { "state": 0, "rootstock_tcn": 7, "scion_tcn": 11, "TCN": 18 },
    { "state": 0, "rootstock_tcn": 8, "scion_tcn": 10, "TCN": 18 },
    { "state": 0, "rootstock_tcn": 9, "scion_tcn": 9, "TCN": 18 },
    { "state": 0, "rootstock_tcn": 10, "scion_tcn": 8, "TCN": 18 },
    { "state": 0, "rootstock_tcn": 11, "scion_tcn": 7, "TCN": 18 },
    { "state": 0, "rootstock_tcn": 12, "scion_tcn": 6, "TCN": 18 },
    { "state": 0, "rootstock_tcn": 13, "scion_tcn": 5, "TCN": 18 },
    { "state": 0, "rootstock_tcn": 14, "scion_tcn": 4, "TCN": 18 },
    { "state": 0, "rootstock_tcn": 15, "scion_tcn": 3, "TCN": 18 },
    { "state": 0, "rootstock_tcn": 16, "scion_tcn": 2, "TCN": 18 },
    { "state": 0, "rootstock_tcn": 1, "scion_tcn": 18, "TCN": 19 },
    { "state": 0, "rootstock_tcn": 2, "scion_tcn": 17, "TCN": 19 },
    { "state": 0, "rootstock_tcn": 3, "scion_tcn": 16, "TCN": 19 },
    { "state": 0, "rootstock_tcn": 4, "scion_tcn": 15, "TCN": 19 },
    { "state": 0, "rootstock_tcn": 5, "scion_tcn": 14, "TCN": 19 },
    { "state": 0, "rootstock_tcn": 6, "scion_tcn": 13, "TCN": 19 },
    { "state": 0, "rootstock_tcn": 7, "scion_tcn": 12, "TCN": 19 },
    { "state": 0, "rootstock_tcn": 8, "scion_tcn": 11, "TCN": 19 },
    { "state": 0, "rootstock_tcn": 9, "scion_tcn": 10, "TCN": 19 },
    { "state": 0, "rootstock_tcn": 10, "scion_tcn": 9, "TCN": 19 },
    { "state": 0, "rootstock_tcn": 11, "scion_tcn": 8, "TCN": 19 },
    { "state": 0, "rootstock_tcn": 12, "scion_tcn": 7, "TCN": 19 },
    { "state": 0, "rootstock_tcn": 13, "scion_tcn": 6, "TCN": 19 },
    { "state": 0, "rootstock_tcn": 14, "scion_tcn": 5, "TCN": 19 },
    { "state": 0, "rootstock_tcn": 15, "scion_tcn": 4, "TCN": 19 },
    { "state": 0, "rootstock_tcn": 16, "scion_tcn": 3, "TCN": 19 },
    { "state": 0, "rootstock_tcn": 17, "scion_tcn": 2, "TCN": 19 },
    { "state": 0, "rootstock_tcn": 1, "scion_tcn": 19, "TCN": 20 },
    { "state": 0, "rootstock_tcn": 2, "scion_tcn": 18, "TCN": 20 },
    { "state": 0, "rootstock_tcn": 3, "scion_tcn": 17, "TCN": 20 },
    { "state": 0, "rootstock_tcn": 4, "scion_tcn": 16, "TCN": 20 },
    { "state": 0, "rootstock_tcn": 5, "scion_tcn": 15, "TCN": 20 },
    { "state": 0, "rootstock_tcn": 6, "scion_tcn": 14, "TCN": 20 },
    { "state": 0, "rootstock_tcn": 7, "scion_tcn": 13, "TCN": 20 },
    { "state": 0, "rootstock_tcn": 8, "scion_tcn": 12, "TCN": 20 },
    { "state": 0, "rootstock_tcn": 9, "scion_tcn": 11, "TCN": 20 },
    { "state": 0, "rootstock_tcn": 10, "scion_tcn": 10, "TCN": 20 },
    { "state": 0, "rootstock_tcn": 11, "scion_tcn": 9, "TCN": 20 },
    { "state": 0, "rootstock_tcn": 12, "scion_tcn": 8, "TCN": 20 },
    { "state": 0, "rootstock_tcn": 13, "scion_tcn": 7, "TCN": 20 },
    { "state": 0, "rootstock_tcn": 14, "scion_tcn": 6, "TCN": 20 },
    { "state": 0, "rootstock_tcn": 15, "scion_tcn": 5, "TCN": 20 },
    { "state": 0, "rootstock_tcn": 16, "scion_tcn": 4, "TCN": 20 },
    { "state": 0, "rootstock_tcn": 17, "scion_tcn": 3, "TCN": 20 },
    { "state": 0, "rootstock_tcn": 18, "scion_tcn": 2, "TCN": 20 },
    { "state": 0, "rootstock_tcn": 1, "scion_tcn": 20, "TCN": 21 },
    { "state": 0, "rootstock_tcn": 2, "scion_tcn": 19, "TCN": 21 },
    { "state": 0, "rootstock_tcn": 3, "scion_tcn": 18, "TCN": 21 },
    { "state": 0, "rootstock_tcn": 4, "scion_tcn": 17, "TCN": 21 },
    { "state": 0, "rootstock_tcn": 5, "scion_tcn": 16, "TCN": 21 },
    { "state": 0, "rootstock_tcn": 6, "scion_tcn": 15, "TCN": 21 },
    { "state": 0, "rootstock_tcn": 7, "scion_tcn": 14, "TCN": 21 },
    { "state": 0, "rootstock_tcn": 8, "scion_tcn": 13, "TCN": 21 },
    { "state": 0, "rootstock_tcn": 9, "scion_tcn": 12, "TCN": 21 },
    { "state": 0, "rootstock_tcn": 10, "scion_tcn": 11, "TCN": 21 },
    { "state": 0, "rootstock_tcn": 11, "scion_tcn": 10, "TCN": 21 },
    { "state": 0, "rootstock_tcn": 12, "scion_tcn": 9, "TCN": 21 },
    { "state": 0, "rootstock_tcn": 13, "scion_tcn": 8, "TCN": 21 },
    { "state": 0, "rootstock_tcn": 14, "scion_tcn": 7, "TCN": 21 },
    { "state": 0, "rootstock_tcn": 15, "scion_tcn": 6, "TCN": 21 },
    { "state": 0, "rootstock_tcn": 16, "scion_tcn": 5, "TCN": 21 },
    { "state": 0, "rootstock_tcn": 17, "scion_tcn": 4, "TCN": 21 },
    { "state": 0, "rootstock_tcn": 18, "scion_tcn": 3, "TCN": 21 },
    { "state": 0, "rootstock_tcn": 19, "scion_tcn": 2, "TCN": 21 },
    { "state": 0, "rootstock_tcn": 1, "scion_tcn": 21, "TCN": 22 },
    { "state": 0, "rootstock_tcn": 2, "scion_tcn": 20, "TCN": 22 },
    { "state": 0, "rootstock_tcn": 3, "scion_tcn": 19, "TCN": 22 },
    { "state": 0, "rootstock_tcn": 4, "scion_tcn": 18, "TCN": 22 },
    { "state": 0, "rootstock_tcn": 5, "scion_tcn": 17, "TCN": 22 },
    { "state": 0, "rootstock_tcn": 6, "scion_tcn": 16, "TCN": 22 },
    { "state": 0, "rootstock_tcn": 7, "scion_tcn": 15, "TCN": 22 },
    { "state": 0, "rootstock_tcn": 8, "scion_tcn": 14, "TCN": 22 },
    { "state": 0, "rootstock_tcn": 9, "scion_tcn": 13, "TCN": 22 },
    { "state": 0, "rootstock_tcn": 10, "scion_tcn": 12, "TCN": 22 },
    { "state": 0, "rootstock_tcn": 11, "scion_tcn": 11, "TCN": 22 },
    { "state": 0, "rootstock_tcn": 12, "scion_tcn": 10, "TCN": 22 },
    { "state": 0, "rootstock_tcn": 13, "scion_tcn": 9, "TCN": 22 },
    { "state": 0, "rootstock_tcn": 14, "scion_tcn": 8, "TCN": 22 },
    { "state": 0, "rootstock_tcn": 15, "scion_tcn": 7, "TCN": 22 },
    { "state": 0, "rootstock_tcn": 16, "scion_tcn": 6, "TCN": 22 },
    { "state": 0, "rootstock_tcn": 17, "scion_tcn": 5, "TCN": 22 },
    { "state": 0, "rootstock_tcn": 18, "scion_tcn": 4, "TCN": 22 },
    { "state": 0, "rootstock_tcn": 19, "scion_tcn": 3, "TCN": 22 },
    { "state": 0, "rootstock_tcn": 20, "scion_tcn": 2, "TCN": 22 },
    { "state": 0, "rootstock_tcn": 1, "scion_tcn": 22, "TCN": 23 },
    { "state": 0, "rootstock_tcn": 2, "scion_tcn": 21, "TCN": 23 },
    { "state": 0, "rootstock_tcn": 3, "scion_tcn": 20, "TCN": 23 },
    { "state": 0, "rootstock_tcn": 4, "scion_tcn": 19, "TCN": 23 },
    { "state": 0, "rootstock_tcn": 5, "scion_tcn": 18, "TCN": 23 },
    { "state": 0, "rootstock_tcn": 6, "scion_tcn": 17, "TCN": 23 },
    { "state": 0, "rootstock_tcn": 7, "scion_tcn": 16, "TCN": 23 },
    { "state": 0, "rootstock_tcn": 8, "scion_tcn": 15, "TCN": 23 },
    { "state": 0, "rootstock_tcn": 9, "scion_tcn": 14, "TCN": 23 },
    { "state": 0, "rootstock_tcn": 10, "scion_tcn": 13, "TCN": 23 },
    { "state": 0, "rootstock_tcn": 11, "scion_tcn": 12, "TCN": 23 },
    { "state": 0, "rootstock_tcn": 12, "scion_tcn": 11, "TCN": 23 },
    { "state": 0, "rootstock_tcn": 13, "scion_tcn": 10, "TCN": 23 },
    { "state": 0, "rootstock_tcn": 14, "scion_tcn": 9, "TCN": 23 },
    { "state": 0, "rootstock_tcn": 15, "scion_tcn": 8, "TCN": 23 },
    { "state": 0, "rootstock_tcn": 16, "scion_tcn": 7, "TCN": 23 },
    { "state": 0, "rootstock_tcn": 17, "scion_tcn": 6, "TCN": 23 },
    { "state": 0, "rootstock_tcn": 18, "scion_tcn": 5, "TCN": 23 },
    { "state": 0, "rootstock_tcn": 19, "scion_tcn": 4, "TCN": 23 },
    { "state": 0, "rootstock_tcn": 20, "scion_tcn": 3, "TCN": 23 },
    { "state": 0, "rootstock_tcn": 21, "scion_tcn": 2, "TCN": 23 },
    { "state": 0, "rootstock_tcn": 1, "scion_tcn": 23, "TCN": 24 },
    { "state": 0, "rootstock_tcn": 2, "scion_tcn": 22, "TCN": 24 },
    { "state": 0, "rootstock_tcn": 3, "scion_tcn": 21, "TCN": 24 },
    { "state": 0, "rootstock_tcn": 4, "scion_tcn": 20, "TCN": 24 },
    { "state": 0, "rootstock_tcn": 5, "scion_tcn": 19, "TCN": 24 },
    { "state": 0, "rootstock_tcn": 6, "scion_tcn": 18, "TCN": 24 },
    { "state": 0, "rootstock_tcn": 7, "scion_tcn": 17, "TCN": 24 },
    { "state": 0, "rootstock_tcn": 8, "scion_tcn": 16, "TCN": 24 },
    { "state": 0, "rootstock_tcn": 9, "scion_tcn": 15, "TCN": 24 },
    { "state": 0, "rootstock_tcn": 10, "scion_tcn": 14, "TCN": 24 },
    { "state": 0, "rootstock_tcn": 11, "scion_tcn": 13, "TCN": 24 },
    { "state": 0, "rootstock_tcn": 12, "scion_tcn": 12, "TCN": 24 },
    { "state": 0, "rootstock_tcn": 13, "scion_tcn": 11, "TCN": 24 },
    { "state": 0, "rootstock_tcn": 14, "scion_tcn": 10, "TCN": 24 },
    { "state": 0, "rootstock_tcn": 15, "scion_tcn": 9, "TCN": 24 },
    { "state": 0, "rootstock_tcn": 16, "scion_tcn": 8, "TCN": 24 },
    { "state": 0, "rootstock_tcn": 17, "scion_tcn": 7, "TCN": 24 },
    { "state": 0, "rootstock_tcn": 18, "scion_tcn": 6, "TCN": 24 },
    { "state": 0, "rootstock_tcn": 19, "scion_tcn": 5, "TCN": 24 },
    { "state": 0, "rootstock_tcn": 20, "scion_tcn": 4, "TCN": 24 },
    { "state": 0, "rootstock_tcn": 21, "scion_tcn": 3, "TCN": 24 },
    { "state": 0, "rootstock_tcn": 22, "scion_tcn": 2, "TCN": 24 },
    { "state": 0, "rootstock_tcn": 1, "scion_tcn": 24, "TCN": 25 },
    { "state": 0, "rootstock_tcn": 2, "scion_tcn": 23, "TCN": 25 },
    { "state": 0, "rootstock_tcn": 3, "scion_tcn": 22, "TCN": 25 },
    { "state": 0, "rootstock_tcn": 4, "scion_tcn": 21, "TCN": 25 },
    { "state": 0, "rootstock_tcn": 5, "scion_tcn": 20, "TCN": 25 },
    { "state": 0, "rootstock_tcn": 6, "scion_tcn": 19, "TCN": 25 },
    { "state": 0, "rootstock_tcn": 7, "scion_tcn": 18, "TCN": 25 },
    { "state": 0, "rootstock_tcn": 8, "scion_tcn": 17, "TCN": 25 },
    { "state": 0, "rootstock_tcn": 9, "scion_tcn": 16, "TCN": 25 },
    { "state": 0, "rootstock_tcn": 10, "scion_tcn": 15, "TCN": 25 },
    { "state": 0, "rootstock_tcn": 11, "scion_tcn": 14, "TCN": 25 },
    { "state": 0, "rootstock_tcn": 12, "scion_tcn": 13, "TCN": 25 },
    { "state": 0, "rootstock_tcn": 13, "scion_tcn": 12, "TCN": 25 },
    { "state": 0, "rootstock_tcn": 14, "scion_tcn": 11, "TCN": 25 },
    { "state": 0, "rootstock_tcn": 15, "scion_tcn": 10, "TCN": 25 },
    { "state": 0, "rootstock_tcn": 16, "scion_tcn": 9, "TCN": 25 },
    { "state": 0, "rootstock_tcn": 17, "scion_tcn": 8, "TCN": 25 },
    { "state": 0, "rootstock_tcn": 18, "scion_tcn": 7, "TCN": 25 },
    { "state": 0, "rootstock_tcn": 19, "scion_tcn": 6, "TCN": 25 },
    { "state": 0, "rootstock_tcn": 20, "scion_tcn": 5, "TCN": 25 },
    { "state": 0, "rootstock_tcn": 21, "scion_tcn": 4, "TCN": 25 },
    { "state": 0, "rootstock_tcn": 22, "scion_tcn": 3, "TCN": 25 },
    { "state": 0, "rootstock_tcn": 23, "scion_tcn": 2, "TCN": 25 },
    { "state": 0, "rootstock_tcn": 1, "scion_tcn": 25, "TCN": 26 },
    { "state": 0, "rootstock_tcn": 2, "scion_tcn": 24, "TCN": 26 },
    { "state": 0, "rootstock_tcn": 3, "scion_tcn": 23, "TCN": 26 },
    { "state": 0, "rootstock_tcn": 4, "scion_tcn": 22, "TCN": 26 },
    { "state": 0, "rootstock_tcn": 5, "scion_tcn": 21, "TCN": 26 },
    { "state": 0, "rootstock_tcn": 6, "scion_tcn": 20, "TCN": 26 },
    { "state": 0, "rootstock_tcn": 7, "scion_tcn": 19, "TCN": 26 },
    { "state": 0, "rootstock_tcn": 8, "scion_tcn": 18, "TCN": 26 },
    { "state": 0, "rootstock_tcn": 9, "scion_tcn": 17, "TCN": 26 },
    { "state": 0, "rootstock_tcn": 10, "scion_tcn": 16, "TCN": 26 },
    { "state": 0, "rootstock_tcn": 11, "scion_tcn": 15, "TCN": 26 },
    { "state": 0, "rootstock_tcn": 12, "scion_tcn": 14, "TCN": 26 },
    { "state": 0, "rootstock_tcn": 13, "scion_tcn": 13, "TCN": 26 },
    { "state": 0, "rootstock_tcn": 14, "scion_tcn": 12, "TCN": 26 },
    { "state": 0, "rootstock_tcn": 15, "scion_tcn": 11, "TCN": 26 },
    { "state": 0, "rootstock_tcn": 16, "scion_tcn": 10, "TCN": 26 },
    { "state": 0, "rootstock_tcn": 17, "scion_tcn": 9, "TCN": 26 },
    { "state": 0, "rootstock_tcn": 18, "scion_tcn": 8, "TCN": 26 },
    { "state": 0, "rootstock_tcn": 19, "scion_tcn": 7, "TCN": 26 },
    { "state": 0, "rootstock_tcn": 20, "scion_tcn": 6, "TCN": 26 },
    { "state": 0, "rootstock_tcn": 21, "scion_tcn": 5, "TCN": 26 },
    { "state": 0, "rootstock_tcn": 22, "scion_tcn": 4, "TCN": 26 },
    { "state": 0, "rootstock_tcn": 23, "scion_tcn": 3, "TCN": 26 },
    { "state": 0, "rootstock_tcn": 24, "scion_tcn": 2, "TCN": 26 }
]),
db.arborescent_stencils.createIndex({"TCN":1}),
db.arborescent_stencils.createIndex({"state":1}),
];

printjson(res)