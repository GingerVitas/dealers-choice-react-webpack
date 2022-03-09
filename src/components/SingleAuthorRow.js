import React from 'react';

const SingleAuthorRow = props => {
  const book = props.book;

  return (
    <tr>
      <td>{book.imageUrl}</td>
      <td>{book.title}</td>
      <td>{book.price}</td>
    </tr>
  )
}

export default SingleAuthorRow