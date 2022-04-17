import React, { useEffect, useState } from "react";
import ReviewDetails from "../ReviewDetails/ReviewDetails";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <h2 id="reviews" className="text-danger mt-5">
        My customer feedback
      </h2>
      <div className="row container mx-auto m-4 g-4">
        {reviews.map((review) => (
          <ReviewDetails key={review.id} review={review}></ReviewDetails>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
