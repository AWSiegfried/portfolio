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
        <p><span className="about-span">Languages: </span>HTML, Javascript, CSS</p>
        <p><span className="about-span">Technical skills: </span>React, React Native, Redux, MERN, MySQL, etc.</p>
        <p><span className="about-span">Competencies: </span>
        Product management, business development, brand building, 
	advertising campaign management, CPC/PPC,conversion funnels, Shopify
        </p>
        <p>
        Hi there, I’m Alex and I’m a web developer.  Whether it’s designing a spaceship with legos as a kid or writing 100-piece choir arrangements now as a musician, I’ve always been a creator.  I love bringing new things into the world, especially if they’re aesthetically pretty. Web development couples my need to think critically with my love and desire to make new things.  
          <br></br>
          <br></br>
          I first fell in love with the fast-paced collaborative environment while working for early-stage tech startups.  Since we were a small team, we had our daily standups as a whole.  Every day I got to hear what new complex problem the dev team was trying to solve and while it seemed grueling, it was exciting.  Not only did it require heavy critical thinking, but it also required creativity to successfully bend around various obstacles.  On top of that, you have tangible outcomes with your end project so you get to see the fruits of your labor.  After seeing this for many years across several different teams and companies, I finally decided that being a part of that type of team is what I wanted to do.  
          <br></br>
          <br></br>
          I feel I have an advantage coming from the business development side, as I’m able to bridge the gap between the sales and dev team.  I know how conversations with clients go and understand their desire (and the team’s desire) to implement useful changes through efficiently executed sprints.  I have first-hand experience with the tension created by a waiting business team and a continuously forging dev team. 
          <br></br>
          <br></br>
          Outside of growing my developing skills, I really love making music.  I’m the frontman for a progressive metal band and for the same reason I love developing.  I get to make something very pretty yet technical and challenging to execute.  I blend classically operatic vocals and orchestrations with death metal to make what I imagine Holst or Bach would compose if they were alive today and played through a half-stack.
        </p>

        
      </div>
    </div>
  );
}

export default About;
