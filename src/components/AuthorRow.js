import React from 'react';

const AuthorRow = ({author, authorSelector}) => {
  return(
    <tr>
      <td className='navItem' onClick={()=> authorSelector(author.id)}>{author.firstName} {author.lastName}</td>
      <td>{author.books.length}</td>
    </tr>
  )
}
export default AuthorRow