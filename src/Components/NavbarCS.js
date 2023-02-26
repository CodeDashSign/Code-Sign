import "./NavbarCS.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import Logo from "../Images/textonly_logo.svg";

function NavbarCS() {
  const [navBackground, setNavBackground] = useState(false);
  var navLinkStyle = {
    color: "white",
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
        expand="lg"
        variant="dark"
        // style={{ backgroundColor: "rgb(42, 79, 100)" }}
        style={{
          visibility: navBackground ? "visible" : "hidden",
          backgroundColor: navBackground ? "rgb(42, 79, 100)" : "transparent",
          transition: "0.3s ease-in-out",
        }}
      >
        <Container fluid>
          {/* <Navbar.Brand href="/" style={{ display: "inline-block !important" }}>
            <img src={Logo} width={"10%"} alt="navbar-landing-company-logo" />
          </Navbar.Brand> */}
          <Navbar.Toggle
            style={{
              border: "none",
              outline: "0 !important",
              display: "inline-block !important",
            }}
            aria-controls="responsive-navbar-nav"
            className="navbarToggle"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto justify-content-center"
              style={{ width: "50%", textAlign: "center", margin: "auto" }}
            >
              <Nav.Link href="/" style={navLinkStyle} className="navLink">
                About Us
              </Nav.Link>
              <Nav.Link
                href="/experience"
                style={navLinkStyle}
                className="navLink"
              >
                Our Experience
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
