// This file initializes Sequelize with the configuration from config/config.js and exports the Sequelize instance.

const { Sequelize } = require('sequelize');
const config = require('./config'); 

const env = process.env.NODE_ENV || 'development';
const envConfig = config[env];

const sequelize = new Sequelize(
  envConfig.database,
  envConfig.username,
  envConfig.password,
  {
    host: envConfig.host,
    dialect: envConfig.dialect,
    define: envConfig.define,
  }
);

module.exports = sequelize;
