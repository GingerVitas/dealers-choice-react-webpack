import React from 'react';

const BooksRow = ({book, deleteBook, authorSelector}) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

  return (
    <tr>
      <td><img src={book.imageUrl} /></td>
      <td>{book.title}</td>
      <td className='navItem' onClick={()=> authorSelector(book.author.id)}>{book.author.firstName} {book.author.lastName}</td>
      <td>{formatter.format(book.price)}</td>
      <td>{book.genre}</td>
      <td><button className='removeButton' onClick={()=> deleteBook(book.id)}>Remove from Inventory</button></td>
    </tr>
  )
};

export default BooksRow