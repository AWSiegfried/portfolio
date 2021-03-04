import React from "react";
import "./Footer.css";

//Icons
import { Icon } from "../allComponents";
import { Fb, Gh, Ig, Li, Sp } from "../../assets/icons/allicons.js";


function Footer() {
  return (
    <div className="iconContainer">
      <Icon
        href="https://github.com/AWSiegfried"
        src={Gh}
        alt="Github"
        height="33"
      />
      <Icon
        href="https://www.linkedin.com/in/awsiegfried/"
        src={Li}
        alt="LinkedIn"
        height="31"
      />
      <Icon
        href="https://www.instagram.com/awsiegfried/"
        src={Ig}
        alt="Instagram"
        height="38"
        ml="-3px"
      />
      <Icon
        href="https://www.facebook.com/alex.siegfried.52/"
        src={Fb}
        alt="Facebook"
        height="28"
      />
      <Icon
        href="https://linktr.ee/deified/"
        src={Sp}
        alt="Spotify"
        height="30"
        ml="2px"
      />
    </div>
  );
}

export default Footer;
