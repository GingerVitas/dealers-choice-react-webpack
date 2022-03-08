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
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  genre: {
    type: Sequelize.ENUM('Biography', 'Thriller', 'Sci-Fi', 'Young Adult', 'Mystery', 'Romance'),
  },
  used: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  }
});

module.exports = Book;