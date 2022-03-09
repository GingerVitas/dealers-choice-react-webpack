import React from 'react';
import AuthorRow from './AuthorRow'

const AuthorTable = props => {
  const authors = props.authors;
  const authorSelector = props.authorSelector

  return (
    <table>
      <tbody>
        <tr>
          <th>Author</th>
          <th>Available Titles</th>
        </tr>
        {authors.map(author => <AuthorRow key={author.id} author={author} authorSelector={authorSelector}/>)}
      </tbody>
    </table>
  )
}

export default AuthorTable