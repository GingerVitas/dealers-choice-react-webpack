import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BooksTable from './components/BooksTable'
import AuthorTable from './components/AuthorTable'
import SingleAuthor from './components/SingleAuthor';
import '../public/main.css'

class Root extends Component {
  constructor(){
    super(),
    this.state = {
      books: [],
      authors: [],
      display: [],
      selectedAuthor: {}
    }
    this.displaySelector = this.displaySelector.bind(this)
    this.addBook = this.addBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.authorSelector = this.authorSelector.bind(this);
  }

  async componentDidMount() {
    const books = (await axios.get('/api/books')).data;
    const authors = (await axios.get('/api/authors')).data;
    this.setState({books, authors})
  }

  async addBook () {
    await axios.post('/api/books')
    const books = (await axios.get('/api/books')).data
    const authors = (await axios.get('api/authors')).data
    this.setState({books, authors, display: []});
    this.setState( {display: this.state.books} )
  }

  async deleteBook(id) {
    await axios.delete(`/api/books/${id}`);
    const newBooks = this.state.books.filter((x)=> x.id !== id);
    this.setState({books: newBooks, display: []});
    this.setState({display: this.state.books})
  }

  displaySelector(arr) {
    this.setState({display: arr, selectedAuthor: {}})
  }

  async authorSelector(id) {
    const author = (await axios.get(`/api/authors/${id}`)).data;
    this.setState({selectedAuthor: author})
  }

  render() {
    const { books, authors, display, selectedAuthor } = this.state;
    const displaySelector = this.displaySelector;
    const addBook = this.addBook;
    const deleteBook = this.deleteBook;
    const authorSelector = this.authorSelector;


    return (
      <div id="main">
        <div>
          <h1 className='navItem' onClick={()=> displaySelector([])}>ACME Book Store</h1>
        </div>
        <div id="navbar">
          <ul>
            <li className='navItem' onClick={()=>  displaySelector(books)}>Book List</li>
            <li className='navItem' onClick={()=>  displaySelector(authors)}>Author List</li>
          </ul>
        </div>
        <div id="listContainer">
          {
            selectedAuthor.id ? <SingleAuthor author={selectedAuthor}/>
            : display === books ? <BooksTable books={books} addBook={addBook} deleteBook={deleteBook}/>
            : display === authors ? <AuthorTable authors={authors} authorSelector={authorSelector}/>
            : <h2>Welcome to the store!</h2>
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