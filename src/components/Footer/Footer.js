import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="links-container" id="contact">
        <a
          href="https://www.linkedin.com/in/aviral-jain-068611224/"
          target="blank"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/aviraljain19" target="blank">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="mailto:aviraljainltr@gmail.com">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
