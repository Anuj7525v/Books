import React,{useEffect,useState} from 'react';
import {fetchBookById} from "../../services/api";;

function BookDetails({bookId}) {
    const [book,setBook] = useState(null);

    useEffect(() => {
        fetchBookById(bookId).then(setBook);
    },[bookId]);

    if(!book) return <p>Loading...</p>;
  return (
    <div>
    <h1>{book.title}</h1>
    <p>{book.description}</p>
    <p>Author:{book.author}</p>
      
    </div>
  )
}

export default BookDetails;
