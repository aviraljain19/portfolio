import React from "react";
import "./Skill.css";
import expressjs from "../../assets/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo-removebg-preview.jpg";
import nodejs from "../../assets/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e2a4242.1423638015246930701731-Photoroom.png-Photoroom-removebg-preview.jpg";

const Skill = () => {
  return (
    <div className="skill-container">
      <h3>
        My <span>Skills</span>
      </h3>
      <div className="skills-list-container">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
          alt="html"
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
          alt="css"
        />
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png"
          alt="javascipt"
        />
        <img src={nodejs} alt="node" />
        <img src={expressjs} alt="express" />
        <img
          src="https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png"
          alt="mongoDB"
        />
        <img
          src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          alt="react"
        />
      </div>
    </div>
  );
};

export default Skill;
