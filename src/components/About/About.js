import React from "react";
import img from "../../images/img.jpg";
const About = () => {
  return (
    <div>
      <h2>Who am I?</h2>
      <img className="w-25" src={img} alt="" />
      <p>
        I am Shoriful Habib. I am studying Bsc. in Software Engineering at
        Institute of Information Technology, NSTU. Also I am a front-end web
        developer.I am self-motivated, ambitious and enthusiastic web developer
        with highly interested in JavaScript, HTML5, CSS3, and front-end web
        development with modern web tech like React.js.I always try to learn new
        things daily.I believe that those who are hard worker are never failed.
      </p>
    </div>
  );
};

export default About;
