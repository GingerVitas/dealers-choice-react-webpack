import React from 'react';
import BooksRow from './BooksRow'

const BooksTable = ({ books, addBook, deleteBook, authorSelector }) => {


  return (
    <div id='bookTable'>
      <button className='addButton' onClick={()=> addBook()}>Add a Book!</button>
      <table>
        <tbody>
          <tr>
            <th>Cover Artwork</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Genre</th>
          </tr>
          {books.map(book => <BooksRow key={book.id} book={book} deleteBook={deleteBook} authorSelector={authorSelector}/>)}
        </tbody>
      </table>
    </div>
  )
}

export default BooksTable;