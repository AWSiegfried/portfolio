import React from "react";
import "./Footer.css";

//Icons
import { Icon } from "../allComponents";
import { Fb, Gh, Ig, Li, Sp } from "../../assets/icons/allicons.js";


function Footer() {
  return (
    <div className="iconContainer">
      <Icon
        href="https://www.youtube.com/c/jamesqquick"
        src={Gh}
        alt="Github"
        height="33"
      />
      <Icon
        href="https://www.youtube.com/c/jamesqquick"
        src={Li}
        alt="LinkedIn"
        height="31"
      />
      <Icon
        href="https://www.youtube.com/c/jamesqquick"
        src={Ig}
        alt="Instagram"
        height="38"
        ml="-3px"
      />
      <Icon
        href="https://www.youtube.com/c/jamesqquick"
        src={Fb}
        alt="Facebook"
        height="28"
      />
      <Icon
        href="https://www.youtube.com/c/jamesqquick"
        src={Sp}
        alt="Spotify"
        height="30"
        ml="2px"
      />
    </div>
  );
}

export default Footer;
