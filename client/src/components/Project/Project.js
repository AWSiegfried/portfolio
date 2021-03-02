import React from "react";
import "./Project.css";

//Icons
import { Ra } from "../../assets/icons/allicons";

function Project() {
  return (
    <div className="project-container">
      <div className="project-text">
        <h1>EMERGENCE</h1>
        <p>
          Lorem impusm this is a porject about many things music related and
          trying to save small bands from dying.
        </p>
        <p>Built With:</p>
        <p>HTML, JS, CSS, Bootstrap, Spotify API, Youtube API, JSCharting</p>
        <div className="link-box">
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            Live App
            <img className="arrow" src={Ra} alt="live application"/>
          </a>
        </div>
        <div className="link-box">
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            Github
            <img className="arrow" src={Ra} alt="github repository"/>
          </a>
        </div>

      </div>
      <div style={{ color: "white" }}>Picture</div>
    </div>
  );
}

export default Project;
