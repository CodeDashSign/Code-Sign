import "./NavbarCS.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../Images/nav_logo.png";

function NavbarExp() {
  var navLinkStyle = {
    fontFamily: "Urbanist, sans-serif",
    fontSize: "3vh",
    fontWeight: 400,
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        className="navbarMainTag fixed-top"
        expand="false"
        variant="dark"
        style={{
          backgroundColor: "rgb(42, 79, 100)",
          transition: "0.3s ease-in-out",
        }}
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <a>
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
            </a>
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

export default NavbarExp;
