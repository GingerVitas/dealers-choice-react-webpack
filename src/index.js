import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BooksTable from './components/BooksTable'
import AuthorTable from './components/AuthorTable'

class Root extends Component {
  constructor(){
    super(),
    this.state = {
      books: [],
      authors: [],
      display: []
    }
    this.displaySelector = this.displaySelector.bind(this)
    this.addBook = this.addBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  async componentDidMount() {
    const books = (await axios.get('/api/books')).data;
    const authors = (await axios.get('/api/authors')).data;
    this.setState({books, authors})
  }

  async addBook () {
    const book = (await axios.post('/api/books')).data;
    const books = (await axios.get('/api/books')).data;
    console.log(book)
    console.log(books)
    this.setState({books, display: []});
    this.setState({display: books})
  }

  async deleteBook(id) {
    await axios.delete(`/api/books/${id}`);
    const newBooks = this.state.books.filter((x)=> x.id !== id);
    this.setState({books: newBooks, display: []});
    this.setState({display: this.state.books})
  }

  displaySelector(arr) {
    this.setState({display: arr})
  }

  render() {
    const books = this.state.books;
    const authors = this.state.authors;
    const display = this.state.display;
    const displaySelector = this.displaySelector;
    const addBook = this.addBook;
    const deleteBook = this.deleteBook;


    return (
      <div id="main">
        <div>
          <h1>ACME Book Inventory</h1>
        </div>
        <div id="navbar">
          <ul>
            <li onClick={()=> displaySelector(books)}>Book List</li>
            <li onClick={()=> displaySelector(authors)}>Author List</li>
          </ul>
        </div>
        <div id="listContainer">
          {
            display === books ? <BooksTable books={books} addBook={addBook} deleteBook={deleteBook}/>
            : display === authors ? <AuthorTable authors={authors} />
            : []
          }
        </div>
      </div>
    )
  }

}


ReactDOM.render(
  <Root />,
  document.querySelector('#root')
)