const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.clients = require("./clients.model")(mongoose);
db.providers = require("./provider.model")(mongoose);

module.exports = db;