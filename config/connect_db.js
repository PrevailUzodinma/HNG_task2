const db = require('../models/index'); 

const connectDB = db.sequelize.sync({ force: true }) // `force: true` will drop the table if it already exists
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((err) => {
    console.error('Unable to synchronize the database:', err);
  });

module.exports = connectDB;