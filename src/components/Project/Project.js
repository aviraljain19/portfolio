import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <div className="project-container" id="project">
      <h3>
        My <span>Projects</span>
      </h3>
      <div className="project-list-container">
        <a href="https://github.com/aviraljain19/Fullstack_blog">
          <div className="project-card">
            <i className="fa-solid fa-blog"></i>
            <p className="title">Blog Website</p>
            <p className="description">
              The main aim of this application is to provide a hassle-free
              accessing of the posted blogs. It also used for posting the blogs,
              editing the blogs, deleting the posted blogs etc.
            </p>
          </div>
        </a>
        <a href="https://github.com/aviraljain19/shiksha_tech_web">
          <div className="project-card">
            <i className="fa-solid fa-laptop"></i>
            <p className="title">Shiksha.Tech</p>
            <p className="description">
              Shiksha.Tech is an online EdTech Platform which provides a user to
              access uploaded lectures and access study materials.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
