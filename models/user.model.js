const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config'); // the path to my database config file

class User extends Model {}

User.init({
  // Define the attributes of the User model
  userId: {
    type: DataTypes.STRING,
    unique: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false, // must not be null
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false, // must not be null
    unique: true, // must be unique
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize, // Pass the connection instance
  modelName: 'User',
  tableName: 'users',
  timestamps: true, // Adds createdAt and updatedAt columns
});

module.exports = User;
