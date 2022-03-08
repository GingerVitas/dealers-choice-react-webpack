import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Root extends Component {
  constructor(){
    super(),
    this.state = {
      books: [],
      authors: [],
      display: []
    }
  }

  async componentDidMount() {
    const books = (await axios.get('/api/books')).data;
    const authors = (await axios.get('/api/authors')).data;
    this.setState({books, authors})
  }

  render() {
    const books = this.state.books;
    const authors = this.state.authors;


    return (
      <div id="main">
        <div>
          <h1>ACME Book Inventory</h1>
        </div>
        <div id="navbar">
          <ul>
            <li>Book List</li>
            <li>Author List</li>
          </ul>
        </div>
        <div id="listContainer">

        </div>
      </div>
    )
  }

}


ReactDOM.render(
  <Root />,
  document.querySelector('#root')
)