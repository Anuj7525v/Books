import React from 'react'
import BookCard from './BookCard';

function FeaturedBooks({books}) {
  return (
    <div>
    {books.map((book) => (
        <BookCard key={book._id} book={book}/>
    ))}
      
    </div>
  )
}

export default FeaturedBooks
