import React from 'react';
import BooksRow from './BooksRow'

const BooksTable = props => {
  const books = props.books;

  return (
    <table>
      <tbody>
        <tr>
          <th>Cover Artwork</th>
          <th>Title</th>
          <th>Author</th>
          <th>Price</th>
          <th>Used?</th>
        </tr>
        {books.map(book => <BooksRow key={book.id} book={book}/>)}
      </tbody>
    </table>
  )
}

export default BooksTable;