import React from 'react'
import {Link} from 'react-router-dom';

function BookCard({book}) {
  return (
    <div>
    <h3>{book.title}</h3>
    <p>Author: {book.author}</p>
    <Link to={`/books/${book._id}`}> View Details</Link>
    </div>
  );
}

export default BookCard;
