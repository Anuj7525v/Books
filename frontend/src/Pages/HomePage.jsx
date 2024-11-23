import React,{useEffect,useState} from 'react';
import { fetchBooks } from '../services/api';
import FeaturedBooks from "../Components/Book/FeaturedBooks";

function HomePage() {
    const [books,setBooks] = useState([]);

    useEffect(() => {
        fetchBooks().then(setBooks);
    },[]);
  return (
    <div>
    <h1>Featured Books</h1>
    <FeaturedBooks books={books.slice(0,6)} />
  </div>
  )
}

export default HomePage;
