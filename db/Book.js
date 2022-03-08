const db = require('./db');
const Sequelize = require('sequelize')

const Book = db.define('book', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  genre: {
    type: Sequelize.ENUM('Biography', 'Thriller', 'Sci-Fi', 'Young Adult', 'Mystery', 'Romance', 'Fantasy'),
  },
  isUsed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  }
});

module.exports = Book;