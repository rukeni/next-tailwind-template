/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useState } from 'react';

interface Review {
  author: string;
  content: string;
  id: string;
}

const Home = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const handleGetReview = () => {
    fetch('https://example.com/reviews')
      .then((res) => res.json())
      .then(setReviews);
  };

  return (
    <>
      <br />
      <button onClick={handleGetReview}>리뷰 가져오기</button>
      {reviews &&
        reviews.map((review) => (
          <div key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </div>
        ))}
    </>
  );
};

export default Home;
