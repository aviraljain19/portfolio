import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="portfolio">
        <h2>Portfolio</h2>
      </div>
      <i
        className={`fa-solid fa-bars ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      ></i>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="/" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#project" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1lL_s_y4NrnOXvVgfagAE4AmfN8SfT59Y/view?usp=drive_link"
              onClick={toggleMenu}
              target="blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
