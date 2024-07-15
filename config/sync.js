const sequelize = require('./database'); // the path to my actual database config file
const User = require('../models/user.model'); // the path to my User model file


async function syncModels() {
  try {
    await sequelize.sync({ force: false });
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Error syncing the models with the database:', error);
  } finally {
    await sequelize.close();
  }
}

module.exports = syncModels;
