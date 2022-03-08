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
  }

  async componentDidMount() {
    const books = (await axios.get('/api/books')).data;
    const authors = (await axios.get('/api/authors')).data;
    this.setState({books, authors})
  }

  displaySelector(arr) {
    this.setState({display: arr})
  }

  render() {
    const books = this.state.books;
    const authors = this.state.authors;
    const display = this.state.display;
    const displaySelector = this.displaySelector;


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
            display === books ? <BooksTable books={books} />
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