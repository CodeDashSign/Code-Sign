import "./NavbarCS.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";

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
      const show = window.scrollY > dimensions.innerHeight - 70;
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
        className="navbarMainTag fixed-top fs-4"
        expand="lg"
        variant="dark"
        style={{
          visibility: navBackground ? "visible" : "hidden",
          backgroundColor: navBackground ? "black" : "transparent",
          transition: "0.5s ease-in-out",
        }}
      >
        <Container fluid>
          <Navbar.Brand
            href="#"
            className="logo"
            style={{ color: navBackground ? "white" : "black" }}
          >
            Shringar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto justify-content-end"
              style={{ width: "100%" }}
            >
              <Nav.Link active href="#about" style={navLinkStyle}>
                About
              </Nav.Link>
              <Nav.Link active href="#services" style={navLinkStyle}>
                Services
              </Nav.Link>
              <Nav.Link active href="#contact" style={navLinkStyle}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarCS;
