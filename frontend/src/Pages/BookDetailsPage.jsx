import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { fetchBookById,fetchReviews } from '../services/api'
import BookDetails from "../Components/Book/BookDetails";
import ReviewFrom from "../Components/ReviewFrom";

function BookDetailsPage() {
    const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchBookById(id).then(setBook);
    fetchReviews(id).then(setReviews);
  }, [id]);

  if (!book) return <p>Loading...</p>;


  return (
    <div>
    <BookDetails book={book} />
    <h2>Reviews</h2>
    {reviews.map((review) => (
      <div key={review._id}>{review.content}</div>
    ))}
    <ReviewFrom bookId={id} onReviewAdded={(newReview) => setReviews((prev) => [...prev, newReview])} />
  </div>
  )
}

export default BookDetailsPage;
