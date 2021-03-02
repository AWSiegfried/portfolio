import React from "react";
import { useLocation } from "react-router-dom";

function Title(pageTitle) {
  const location = useLocation();

  return (
    <div>
      { (location.pathname.includes("about")) ? "About"
        : location.pathname.includes("projects") ? "Projects"
        : "Contact"}
    </div>
  );
}

export default Title;
