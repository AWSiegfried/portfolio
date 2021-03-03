import React from 'react'
import { Nav } from "react-bootstrap";

//Styles
import "./Contact.css"

//Background
import {Projects as background} from "../../assets/backgrounds/allbackgrounds"

//Componenets
import {Title} from "../../components/allComponents"

function Contact() {

    const styles= {
        background: {
            backgroundImage: `url("${background}")`,
            padding: "0",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            // marginBottom: "0"

        },
        p: {
            marginBottom: ".5rem"
        }
    }
    return (
        <div className="contact-container" style={styles.background}>
            <Title/>
        </div>
    )
}

export default Contact;
