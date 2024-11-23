import React,{useEffect,useState} from 'react';
import { fetchBooks } from '../services/api';
import BookList from '../Components/Book/BookList';

function BookListingPage() {
    const [books,setBooks] = useState([]);
    const [search,setSearch] = useState('');

    useEffect(() => {
        fetchBooks().then(setBooks);
    },[]);

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      );
  return (
    <div>
    <input
      type="text"
      placeholder="Search books..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <BookList books={filteredBooks} />
  </div>
  )
}

export default BookListingPage;
