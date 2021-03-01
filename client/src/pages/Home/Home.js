import React from "react";
import { Nav } from "react-bootstrap";


//Styles
import "./Home.css";

//Background
import {Home as home} from "../../assets/backgrounds/allbackgrounds"

function Home() {

    const styles= {
        background: {
            backgroundImage: `url("${home}")`,
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
    <div className="home-container" style={styles.background}>
      <div className="home-text">
        <h1>Hello, I'm Alex</h1>
        <p style={styles.p}>web-developer</p>
        <p style={styles.p}>musician</p>
        <p style={styles.p}>maker of pretty things</p>
        <Nav.Link
          href="/about"
          className="learn-more pl-0"
          style={{
            color: "#9900C9",
            fontWeight: "400" 
          }}
          // style={styles.NavbarLink}
        >
            Learn More
        </Nav.Link>
      </div>
    </div>
  );
}

export default Home;
