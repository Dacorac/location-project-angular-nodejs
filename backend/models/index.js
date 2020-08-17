'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
require('sequelize-hierarchy')(Sequelize);
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelizedb;
if (config.use_env_variable) {
  sequelizedb = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelizedb = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelizedb;
db.Sequelize = Sequelize;

db.location = require('./location.js')(sequelizedb, Sequelize);
module.exports = db;
