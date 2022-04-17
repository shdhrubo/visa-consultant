import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../images/banner-1.jpg";
import img2 from "../../images/banner-2.jpg";
import img3 from "../../images/banner-3.jpg";
const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>Certified Visa Consultant</h3>
            <p>I am a certified visa consultant in Dhaka</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Available for almost every county</h3>
            <p>Yes! I provide visa guidline for every country in the world </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Catch your dream</h3>
            <p>
              I always help people for catching their dream to get foreign visa
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
