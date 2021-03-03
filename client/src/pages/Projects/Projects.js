import React from "react";
import "./Projects.css";

//Styles
import "./Projects.css";

//Components
import { Title, Project } from "../../components/allComponents";
import { Projects as background } from "../../assets/backgrounds/allbackgrounds";

//Projects
import projects from "./allProjects"

function Projects() {
    // console.log(projects)
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
//Things I need to pass - name, desc text, built with, live app, github, img
  return (
    <div className="projects-container" style={styles.background}>
      <Title />
      {projects.map((project) => (
                <Project
                  key={project.id}
                  id={project.id}
                  name={project.name}
                  live={project.live}
                  github={project.github}
                  img={project.img}
                  desc={project.desc}
                  built={project.built}
                />
              ))}
    </div>
  );
}

export default Projects;
