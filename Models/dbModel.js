const dbConfig = require('../Config/dbConfig');

const mongoose = require('mongoose');

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.user = require('./userModel.js')(mongoose);

module.exports = db;
