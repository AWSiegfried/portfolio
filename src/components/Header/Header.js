import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css"

function Header() {
  const styles = {
    HeaderContainer: {
      display: "flex",
      flexDirection: "row",
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "2vh"
    },
    NavbarBrand: {
      color: "#9900C9",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      fontSize: "2vw",
      letterSpacing: "4px",
      // lineHeight: "1.5"
      transform: "scale(1, .75)"
    },
    NavbarLink: {
      color: "#9900C9",
      fontFamily: "Montserrat",
      fontSize: "17px",
      transform: "scale(1, .75)"
    },

  }

  return ( 
    <Navbar expand="md" className="header-container d-flex " fixed="top" style={styles.HeaderContainer} variant="dark">
      <Navbar.Brand href="/" style={styles.NavbarBrand} activeclassname="underline" >ALEXANDER WOLFGANG SIEGFRIED</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" bg="transparent" style={{borderColor: "white", background: "black"}} >

      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav className="ml-auto mr-5 navController" style={styles.nav}>
          <Nav.Link href="/about" style={styles.NavbarLink} activeclassname="underline">ABOUT</Nav.Link>
          <Nav.Link href="/projects" style={styles.NavbarLink} activeclassname="underline">PROJECTS</Nav.Link>
          <Nav.Link href="/contact" style={styles.NavbarLink} activeclassname="underline">CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
