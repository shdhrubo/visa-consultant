import React from "react";

const ReviewDetails = ({ review }) => {
  const { id, name, text, ratings } = review;
  return (
    <div className="col-sm-12 col-12 col-md-6 col-lg-6 border border-1 p-2">
      <h5>{name} : </h5>
      <q> {text} </q>
      <p>Ratings: {ratings}</p>
    </div>
  );
};

export default ReviewDetails;
