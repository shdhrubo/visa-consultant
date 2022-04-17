import React from "react";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div>
      <small>
        Copyright &copy; {year} All rights reserved by <b>SHD</b>
      </small>
    </div>
  );
};

export default Footer;
