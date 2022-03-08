import React from 'react';

const AuthorRow = props => {
  const author = props.author;

  return(
    <tr>
      <td>{author.firstName} {author.lastName}</td>
      <td>{author.books.length}</td>
    </tr>
  
  )
}

export default AuthorRow