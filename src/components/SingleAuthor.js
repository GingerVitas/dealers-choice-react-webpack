import React from 'react';
import SingleAuthorTable from './SingleAuthorTable';

const SingleAuthor = props => {
  const author = props.author;

  return (
    <div>
      <h2>{author.firstName} {author.lastName}'s Books</h2>
      <SingleAuthorTable books={author.books}/>
    </div>
  )
}

export default SingleAuthor