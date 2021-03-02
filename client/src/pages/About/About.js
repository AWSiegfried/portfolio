import React from "react";
import "./About.css";

//Background
import { About as about } from "../../assets/backgrounds/allbackgrounds";

//Picture
import alex from "../../assets/images/alex.png";

//Components
import { Title } from "../../components/allComponents";

function About() {
  const styles = {
    background: {
      backgroundImage: `url("${about}")`,
      padding: "0",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      // marginBottom: "0"
    },
  };
  return (
    <div className="about-container" style={styles.background}>
      <img src={alex} alt="Bio" className="bio-picture"/>
      <div className="text-container">
        <Title />
        <p>
          Nulla euismod elementum tortor sed laoreet. Maecenas vel sucipit
          lacus. Pellentesque egestas, tellus sed accumsan vulputate, magna nisi
          vulputate magna, non lacinia nisl sapien nec mauris. 
          <br></br>
          <br></br>
          Nunc imperdiet
          nibh ac odio scelerisque laoreet. Sed et ligula sit amet velit
          consectetur fermentum a feugiat massa. Aliquam ex quam, fringilla ac
          ligula vitae, semper dapibus risus. Nullam at ipsum sed erat malesuada
          lacinia ac ut quam. Ut vel laoreet est.
        </p>
        <p><span>Languages: </span>HTML, Javascript, CSS</p>
        <p><span>Technical skills: </span>React, Redux, MERN, MySQL, Material UI, etc.</p>
        <p><span>Competencies: </span>
        Business development, brand building, 
	advertising campaing/management
        </p>
        
      </div>
    </div>
  );
}

export default About;
