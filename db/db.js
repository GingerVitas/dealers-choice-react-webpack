const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/dealers_choice_react_webpack_db');


module.exports = db