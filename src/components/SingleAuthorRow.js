import React from 'react';

const SingleAuthorRow = props => {
  const book = props.book;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

  return (
    <tr>
      <td><img src={book.imageUrl} /></td>
      <td>{book.title}</td>
      <td>{formatter.format(book.price)}</td>
    </tr>
  )
}

export default SingleAuthorRow