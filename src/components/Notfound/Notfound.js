import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      <h1 className="text-dander">404 </h1>
      <p>Page Not Found</p>
      <Link to={"/"}>
        <button className="btn btn-danger mb-5">Back to home</button>
      </Link>
    </div>
  );
};

export default Notfound;
