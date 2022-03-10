import React from 'react';

const BooksRow = props => {
  const book = props.book;
  const deleteBook = props.deleteBook
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

  return (
    <tr>
      <td><img src={book.imageUrl} /></td>
      <td>{book.title}</td>
      <td>{book.author.firstName} {book.author.lastName}</td>
      <td>{formatter.format(book.price)}</td>
      <td>{book.genre}</td>
      <td><button className='removeButton' onClick={()=> deleteBook(book.id)}>Remove from Inventory</button></td>
    </tr>
  )
};

export default BooksRow