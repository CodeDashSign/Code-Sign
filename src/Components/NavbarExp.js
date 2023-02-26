import "./NavbarCS.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../Images/textonly_logo.svg";

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
        expand="lg"
        variant="dark"
        style={{
          backgroundColor: "rgb(42, 79, 100)",
          transition: "0.3s ease-in-out",
        }}
      >
        <Container fluid style={{ whiteSpace: "nowrap !important" }}>
          {/* <Navbar.Brand href="/" style={{ display: "inline-block !important" }}>
            <img
              src={Logo}
              width={"50%"}
              alt="navbar-experience-company-logo"
              stle={{ marginRight: "0px" }}
            />
          </Navbar.Brand> */}
          <Navbar.Toggle
            style={{
              border: "none",
              outline: "none !important",
              paddingRight: "25px",
              display: "inline-block !important",
            }}
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
                About Us
              </Nav.Link>
              <Nav.Link
                className="navLink"
                active
                href="/experience"
                style={navLinkStyle}
              >
                Our Experience
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
