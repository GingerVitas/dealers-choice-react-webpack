const db = require('./db');
const Book = require('./Book');
const Author = require('./Author');

Book.belongsTo(Author);
Author.hasMany(Book);

module.exports = {
  db,
  Book,
  Author
}