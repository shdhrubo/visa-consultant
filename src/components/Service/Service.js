import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, img, description, price } = service;
  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate(`/services/${id}`);
  };
  return (
    <div className="col-sm-12 col-12 col-md-6 col-lg-6 border border-1 p-2">
      <h2>{name}</h2>
      <img className="w-25" src={img} alt="" />
      <p>Price: {price}</p>
      <p>
        <small>{description}</small>
      </p>
      <button
        onClick={() => navigateToServiceDetail(id)}
        className="btn btn-outline-danger "
      >
        Book Your Time
      </button>
    </div>
  );
};

export default Service;
