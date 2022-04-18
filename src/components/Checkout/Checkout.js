import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Checkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const navigateBtn = () => {
    navigate("/finalcheckout");
  };
  return (
    <div>
      <h1>You have choosed {id} no. option</h1>
      <button onClick={navigateBtn} className="btn btn-danger">
        Proceed Checkout
      </button>
    </div>
  );
};

export default Checkout;
