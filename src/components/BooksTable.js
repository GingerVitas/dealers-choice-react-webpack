import React from 'react';
import BooksRow from './BooksRow'

const BooksTable = props => {
  const books = props.books;
  const addBook = props.addBook;
  const deleteBook = props.deleteBook;

  return (
    <div>
      <button onClick={()=> addBook()}>Add a Book!</button>
      <table>
        <tbody>
          <tr>
            <th>Cover Artwork</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Genre</th>
          </tr>
          {books.map(book => <BooksRow key={book.id} book={book} deleteBook={deleteBook}/>)}
        </tbody>
      </table>
    </div>
  )
}

export default BooksTable;