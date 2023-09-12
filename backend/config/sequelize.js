// sequelize.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite', // Change this to your database dialect (e.g., 'mysql', 'postgres')
  storage: 'C:/Users/kianu/Documents/web dev/expressApp/backend/db.sqlite', // Path to your SQLite database file
});

module.exports = sequelize;