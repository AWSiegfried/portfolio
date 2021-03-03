import React from "react";
import "./Project.css";

//Icons
import { Ra } from "../../assets/icons/allicons";

//Picture
// import { Emergence } from "../../assets/projects/allProjects";

function Project({ name, live, github, img, desc, built }) {
  return (
    <div className="project-container">
      <div className="project-text">
        <h1 className="project-name">{name}</h1>
        <p className="project-p">{desc}</p>
        <p className="project-p">
          <span className="project-span">Built With:</span>
          <br></br>
          {built}
        </p>
        <div className="link-box">
          <a href={live} target="_blank" rel="noreferrer" className="link-text">
            Live App
            <img className="arrow" src={Ra} alt="live application" />
          </a>
        </div>
        <div className="link-box">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="link-text"
          >
            Github
            <img className="arrow" src={Ra} alt="github repository" />
          </a>
        </div>
      </div>
      <div className="card">
        <a href={live} target="_blank" rel="noreferrer">
          <img className="card-image" src={img} alt={name}></img>
        </a>
      </div>
    </div>
  );
}

export default Project;
