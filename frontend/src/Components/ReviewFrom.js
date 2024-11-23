import React, {useState} from 'react';
import { postReviews } from '../services/api';

function ReviewFrom({bookId,onReviewAdded}) {
    const [content,setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newReview = await postReviews({ book: bookId, content, author: 'Anonymous' });
        onReviewAdded(newReview);
        setContent('');
      };
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Write your review..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Submit Review</button>
    </form>
  )
}

export default ReviewFrom;
