import React from 'react';

const AuthorRow = props => {
  const author = props.author;
  const authorSelector = props.authorSelector;

  return(
    <tr>
      <td className='navItem' onClick={()=> authorSelector(author.id)}>{author.firstName} {author.lastName}</td>
      <td>{author.books.length}</td>
    </tr>
  
  )
}
export default AuthorRow