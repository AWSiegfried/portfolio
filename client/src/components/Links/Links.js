import React from "react";
import "./Links.css"

//Link images
import { Down, Fb, Gh, Ig, Li, Sp } from "../../assets/icons/allicons";

//Componenets
import { Icon } from "../allComponents";

function Links() {
  return (
    <div className="links-container">
      <div className="three-links">
        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
          className="links-link"
        >
          <Icon src={Down} alt="Résumé" height="35" className="icon" ml="30px" mr="35px"/>
          Résumé
        </a>
        <a
          href="https://www.linkedin.com/in/awsiegfried/"
          target="_blank"
          rel="noreferrer"
          className="links-link"
        >
          <Icon src={Li} alt="LinkedIn" height="36" className="icon" ml="30px" mr="35px"/>
          LinkedIn
        </a>
        <a
          href="https://github.com/AWSiegfried"
          target="_blank"
          rel="noreferrer"
          className="links-link"
        >
          <Icon src={Gh} alt="Github" height="38" className="icon" ml="30px" mr="35px"/>
          Github
        </a>
      </div>
      <div className="three-links">
        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
          className="links-link"
        >
          <Icon src={Ig} alt="Instagram" height="43" className="icon"  ml="25px" mr="35px"/>
          Instagram
        </a>
        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
          className="links-link"
        >
          <Icon src={Fb} alt="Facebook" height="34" className="icon" ml="30px" mr="35px"/>
          Facebook
        </a>
        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
          className="links-link"
        >
          <Icon src={Sp} alt="Spotify" height="35" className="icon" ml="30px" mr="35px"/>
          Spotify
        </a>
      </div>
    </div>
  );
}

export default Links;
