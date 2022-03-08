const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/dealers_choice_react_webpack_db');
const Book = require('./Book');
const Author = require('./Author');

Book.belongsTo(Author);
Author.hasMany(Book);

modules.export = db;