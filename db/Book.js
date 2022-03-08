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

Book.generateRandom = function() {
  const random = Math.ceil(Math.random()*500)
  const title = `${random}: A New Novel`;
  const fakeAuthorId = Math.floor(Math.random()*6) + 1;
  return this.create({title, authorId: fakeAuthorId, price: 25.00})
}

module.exports = Book;