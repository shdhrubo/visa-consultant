import React from "react";
import "./Footer.css";
const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div>
      <small>
        Copyright &copy; {year} All rights reserved by{" "}
        <b className="text-danger">SHD</b>
      </small>
    </div>
  );
};

export default Footer;
