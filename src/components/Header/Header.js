import React from "react";
import "./Header.css";
import Typical from "react-typical";
import profileImage from "../../assets/IMG_20240227_233416-removebg-removebg.png";

const Header = () => {
  return (
    <div className="header-container" id="about">
      <div className="header-content">
        <h1>Hii, I'm</h1>
        <h2 className="fullname">Aviral Jain</h2>
        <h2>
          I am a
          <Typical
            steps={[" Full Stack Developer", 1000, ""]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          Highly motivated and dedicated Full Stack Developer with a solid
          foundation in both front-end and back-end technologies. Strong
          problem-solving skills and a quick learner, eager to continuously
          improve and expand my technical skills. Seeking an opportunity to
          contribute to a dynamic team and gain practical experience in a
          professional setting to further develop my career as a Full Stack
          Developer.
        </p>
        <a
          href="https://www.linkedin.com/in/aviral-jain-068611224/"
          target="blank"
        >
          <button>Hire Me</button>
        </a>
      </div>
      <div className="profile-img-container">
        <img src={profileImage} alt="" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;
