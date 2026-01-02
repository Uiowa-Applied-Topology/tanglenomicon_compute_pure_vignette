conn = new Mongo();
db = conn.getDB("tanglenomicon");

let res = [
db.arborescent_tangles.insertMany(),
db.arborescent_tangles.createIndex({"notation":1},  {unique: true}),
];

printjson(res)