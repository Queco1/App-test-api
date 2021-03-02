const dbConfig = require('../Config/dbConfig');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.user = require('./userModel.js')(mongoose);

module.exports = db;
