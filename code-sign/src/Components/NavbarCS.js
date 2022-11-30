import "./NavbarCS.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import Logo from "../Images/nav_logo.png";

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
      const show = window.scrollY > 1.05 * dimensions.innerHeight;
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
        // style={{ backgroundColor: "rgb(42, 79, 100)" }}
        style={{
          visibility: navBackground ? "visible" : "hidden",
          backgroundColor: navBackground ? "rgb(42, 79, 100)" : "transparent",
          transition: "0.3s ease-in-out",
        }}
      >
        <Container fluid style={{ width: "95vw" }}>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              width={"30%"}
              alt=""
              style={{
                paddingLeft: "0px",
                paddingRight: "0px",
              }}
              className="gx-0"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            style={{ border: "none" }}
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto justify-content-center"
              style={{ width: "50%", textAlign: "center", margin: "auto" }}
            >
              <Nav.Link
                active
                href="/"
                style={navLinkStyle}
                className="navLink"
              >
                Introduction
              </Nav.Link>
              <Nav.Link
                active
                href="/experience"
                style={navLinkStyle}
                className="navLink"
              >
                Previous Experiences
              </Nav.Link>
              <Nav.Link
                active
                href="/contact"
                style={navLinkStyle}
                className="navLink"
              >
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
