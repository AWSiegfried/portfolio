import React from "react";
import "./Footer.css"

//Icons
import { Fb, Gh, Ig, Li, Sp } from "../../assets/icons/allicons.js";



function Footer() {

  return (
    <div className="iconContainer">
      <a href="https://www.youtube.com/c/jamesqquick" target="_blank" rel="noreferrer">
        <img src={Gh} alt="Github"  height="33"/>
      </a>
      <a href="https://www.youtube.com/c/jamesqquick" target="_blank" rel="noreferrer">
        <img src={Li} alt="LinkedIn"  height="31"/>
      </a>
      <a href="https://www.youtube.com/c/jamesqquick" target="_blank" rel="noreferrer" className="IG">
        <img src={Ig} alt="Instagram"  height="38"/>
      </a>
      <a href="https://www.youtube.com/c/jamesqquick" target="_blank" rel="noreferrer">
        <img src={Fb} alt="Facebook"  height="28"/>
      </a>
      <a href="https://www.youtube.com/c/jamesqquick" target="_blank" rel="noreferrer">
        <img src={Sp} alt="Spotify"  height="30"/>
      </a>
    </div>
  );
}

export default Footer;
