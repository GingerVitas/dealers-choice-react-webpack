import React from 'react';

const BooksRow = props => {
  const book = props.book;
  const deleteBook = props.deleteBook

  return (
    <tr>
      <td><img src={book.imageUrl} /></td>
      <td>{book.title}</td>
      <td>{book.author.firstName} {book.author.lastName}</td>
      <td>{book.price}</td>
      <td>{book.genre}</td>
      <td><button onClick={()=> deleteBook(book.id)}>Remove from Inventory</button></td>
    </tr>
  )
};

export default BooksRow