import React from 'react';

const SingleAuthorRow = props => {
  const book = props.book;
  console.log(book)

  return (
    <tr>
      <td><img src={book.imageUrl} /></td>
      <td>{book.title}</td>
      <td>{book.price}</td>
    </tr>
  )
}

export default SingleAuthorRow