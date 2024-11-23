import React from 'react';
import BookCard from './BookCard';

function BookList({books}) {
  return (
    <div>
    {books.map((book) => (
        <BookCard key={book._id} book={book}/>
    ))}
      
    </div>
  )
}

export default BookList
