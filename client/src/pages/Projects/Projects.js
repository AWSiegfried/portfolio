import React from "react";
import "./Projects.css";

//Styles
import "./Projects.css"

//Components
import { Title } from "../../components/allComponents";
import {Projects as background } from "../../assets/backgrounds/allbackgrounds"

function Projects() {
  const styles = {
    background: {
      backgroundImage: `url("${background}")`,
    //   padding: "0",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      // marginBottom: "0"
    },
    p: {
      marginBottom: ".5rem",
    },
  };

  return (
    <div className="projects-container" style={styles.background}>
      <Title />
    </div>
  );
}

export default Projects;
