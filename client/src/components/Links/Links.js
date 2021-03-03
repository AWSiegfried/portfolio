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
          <Icon src={Down} alt="Résumé" height="35" className="icon" ml="30px" mr="30px"/>
          Résumé
        </a>
        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
          className="links-link"
        >
          <Icon src={Li} alt="LinkedIn" height="36" className="icon" ml="30px" mr="30px"/>
          LinkedIn
        </a>
        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
          className="links-link"
        >
          <Icon src={Gh} alt="Github" height="38" className="icon" ml="30px" mr="30px"/>
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
          <Icon src={Ig} alt="Instagram" height="43" className="icon"  ml="25px" mr="30px"/>
          Instagram
        </a>
        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
          className="links-link"
        >
          <Icon src={Fb} alt="Facebook" height="35" className="icon" ml="30px" mr="30px"/>
          Facebook
        </a>
        <a
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
          className="links-link"
        >
          <Icon src={Sp} alt="Spotify" height="35" className="icon" ml="30px" mr="30px"/>
          Spotify
        </a>
      </div>
    </div>
  );
}

export default Links;
