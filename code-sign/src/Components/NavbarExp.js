import "./NavbarCS.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../Images/nav_logo.png";

function NavbarExp() {
  var navLinkStyle = {
    fontFamily: "Urbanist, sans-serif",
    fontSize: "3vh",
    fontWeight: 400,
    paddingBotton: "10px",
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
            style={{ border: "none", outline: "none !important" }}
            aria-controls="responsive-navbar-nav"
            className="navbarToggle"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto justify-content-center"
              style={{
                width: "50%",
                textAlign: "center",
                margin: "auto",
              }}
            >
              <Nav.Link
                style={navLinkStyle}
                className="navLink"
                active
                href="/"
              >
                Introduction
              </Nav.Link>
              <Nav.Link
                className="navLink"
                active
                href="/experience"
                style={navLinkStyle}
              >
                Previous Experiences
              </Nav.Link>
              <Nav.Link
                className="navLink"
                active
                href="/contact"
                style={navLinkStyle}
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

export default NavbarExp;
