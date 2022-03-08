const db = require('./db');
const Sequelize = require('sequelize')

const Author = db.define('author', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Author