import "./Contact.css";
import { Container, Row, Col } from "react-bootstrap";
import Location from "../Images/location-dot.svg";
import Email from "../Images/email.svg";

const Contact = () => {
  return (
    <Container fluid className="contactParent">
      <Container fluid className="contact" id="contact">
        <Row className="align-items-center">
          <Col xs={12} sm={5} md={5} lg={5} xl={5}>
            <Row>
              <h1 className="contactTitle">
                THIS IS YOUR <b className="mainPoints2">SIGN</b> TO LEVEL UP
                YOUR DIGITAL PRESENCE.
              </h1>
              <br />
              <p className="contactText text-start">
                We would love to start working with you in bringing your website
                ideas to life!
              </p>
            </Row>
          </Col>
          <Col xs={12} sm={1} md={1} lg={1} xl={1}></Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6} className="contactForm">
            <p className="contactDetails text-start">
              <img src={Location} alt="" className="contactDetailsImg" />
              &nbsp;&nbsp;&nbsp; Calgary, AB, Canada
            </p>
            <p className="contactDetails text-start">
              <img src={Email} alt="" className="contactDetailsImg" />
              &nbsp;&nbsp;&nbsp;
              <a className="email" href="mailto:codedashsign@gmail.com">
                codedashsign@gmail.com
              </a>
            </p>
            <br />
            <form
              id="contact-form"
              //   onSubmit={this.handleSubmit.bind(this)}
              method="POST"
              className="text-start"
            >
              <div className="form-group">
                <label htmlFor="nameField">To: </label>
                <input
                  readOnly
                  type="text"
                  id="nameField"
                  name="nameField"
                  className="inputField"
                  value="codedashsign@gmail.com"
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="emailField">From:</label>
                <input
                  type="email"
                  id="emailField"
                  name="emailField"
                  placeholder="Your Email"
                  required
                  className="inputField"
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="orgField">Name:</label>
                <input
                  type="text"
                  id="orgField"
                  name="orgField"
                  required
                  placeholder="Your Name"
                  className="inputField"
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="messageField">Message:</label>
                <textarea
                  id="messageField"
                  name="messageField"
                  required
                  placeholder="Your Message"
                  className="inputFieldMessage"
                />
              </div>
              <br />
              <div className="submitBtn">
                <button type="submit" className="submitButton">
                  Send Message
                </button>
              </div>
            </form>
            <br />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
