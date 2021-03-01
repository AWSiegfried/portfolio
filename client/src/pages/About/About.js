import React from 'react'
import "./About.css"

//Background
import {About as about} from "../../assets/backgrounds/allbackgrounds"

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
            About
        </div>
    )
}

export default About;
