import React from 'react';
import SingleAuthorRow from './SingleAuthorRow';

const SingleAuthorTable = props => {
  const books = props.books;

  return (
    <table>
      <tbody>
        <tr>
          <th>Cover Image</th>
          <th>Book Title</th>
          <th>Price</th>
        </tr>
        {books.map(book => <SingleAuthorRow key={book.id} book={book} />)}
      </tbody>
    </table>
  )
}

export default SingleAuthorTable