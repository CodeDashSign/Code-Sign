import "./NavbarCS.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import Logo from "../Images/logo2.png";

function NavbarCS() {
  const [navBackground, setNavBackground] = useState(false);
  var navLinkStyle = {
    color: navBackground ? "white" : "black",
    fontFamily: "Urbanist, sans-serif",
    fontSize: "3vh",
    fontWeight: 400,
  };
  const navRef = useRef();
  navRef.current = navBackground;
  const dimensions = window;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 0;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar
        collapseOnSelect
        className="navbarMainTag fixed-top"
        expand="false"
        variant="dark"
        style={{ backgroundColor: "#d5dce0" }}
        // style={{
        //   visibility: navBackground ? "visible" : "hidden",
        //   backgroundColor: navBackground ? "#d5dce0" : "transparent",
        //   transition: "0.5s ease-in-out",
        // }}
      >
        <Container fluid>
          <Navbar.Brand>
            <img
              src={Logo}
              width={"20%"}
              alt=""
              style={{ paddingLeft: "0px", paddingRight: "0px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto justify-content-center"
              style={{ width: "50%", textAlign: "center", margin: "auto" }}
            >
              <Nav.Link
                style={{ backgroundColor: "red", borderRadius: "15px" }}
                active
                href="#about"
              >
                Introduction
              </Nav.Link>
              <Nav.Link active href="#services" style={navLinkStyle}>
                Previous Experiences
              </Nav.Link>
              <Nav.Link active href="#contact" style={navLinkStyle}>
                Get in Touch
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarCS;
