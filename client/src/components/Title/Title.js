import React from "react";
import { useLocation } from "react-router-dom";
import "./Title.css"

function Title() {
  const location = useLocation();

  return (
    <div className="title-text">
      { (location.pathname.includes("about")) ? "About Me"
        : location.pathname.includes("projects") ? "Projects"
        : "Contact"}
    </div>
  );
}

export default Title;
