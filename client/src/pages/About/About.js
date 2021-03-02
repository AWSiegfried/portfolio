import React from 'react'
import "./About.css"

//Background
import {About as about} from "../../assets/backgrounds/allbackgrounds"

//Picture
import alex from "../../assets/images/alex.png"

//Components
import { Title } from "../../components/allComponents"

function About() {

    const styles= {
        background: {
            backgroundImage: `url("${about}")`,
            padding: "0",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            // marginBottom: "0"
        }
    }
    return (
        <div className="about-container" style={styles.background}>
            <img src={alex} alt="Bio"/>
            <Title/>
            <div style={{color: "white"}}>Text</div>
            
        </div>
    )
}

export default About;
