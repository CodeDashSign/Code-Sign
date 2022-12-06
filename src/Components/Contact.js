import "./Contact.css";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { useState } from "react";
import Location from "../Images/location-dot.svg";
import Email from "../Images/email.svg";

const Contact = () => {
  const [submissionStatus, submission] = useState(false);
  const [errStatus, errorSwitch] = useState(false);

  const handleClose = () => {
    submission(false);
    document.getElementsByTagName("body").removeClass("modal-open");
  };

  async function sendDiscord(ev) {
    ev.preventDefault();
    const email = document.getElementById("emailField").value;
    const name = document.getElementById("nameField").value;
    const message = document.getElementById("messageField").value;

    try {
      const webhookBody = {
        content: `**@everyone New form submission:\n**`,
        embeds: [
          {
            title: "Contact Form Submission",
            fields: [
              { name: "Sender", value: name },
              { name: "Email", value: email },
              { name: "Message", value: message },
            ],
          },
        ],
      };

      const webhookUrl =
        "https://discord.com/api/webhooks/1047262894900916294/6cduE0Nut5lFC3_S6bauMvmHqofYiGPHEF7lMBNUOIDBPFUl3bI7mosnIAmE_aY5-LZg";

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookBody),
      });

      if (response.ok) {
        submission(true);
      }
    } catch (err) {
      errorSwitch(true);
    }
  }

  return (
    <Container fluid className="contactParent">
      <Container fluid className="contact" id="contact">
        <Row className="align-items-center">
          {submissionStatus && (
            <Modal show={true} className="modalSuccess" centered size="lg">
              <Modal.Body className="modalMain text-center">
                <h1 className="contactTitle2">
                  Thank you for submitting our contact form! We will get back to
                  you soon.
                </h1>
                <br />
                <Button
                  href="contact"
                  className="contactModalClose"
                  onClick={handleClose}
                >
                  <span>Sounds Good</span>
                  <span className="checkMark"> &#10004;</span>
                </Button>
              </Modal.Body>
            </Modal>
          )}
          {errStatus && (
            <Modal show={true} className="modalSuccess" centered size="lg">
              <Modal.Body className="modalMain text-center">
                <h1 className="contactTitle2">
                  Unable to send the message, please disable any extensions
                  active or directly email us using our email address.
                </h1>
                <br />
                <Button
                  href="contact"
                  className="contactModalClose"
                  onClick={handleClose}
                >
                  <span>Okay</span>
                  <span className="checkMark"> &#10004;</span>
                </Button>
              </Modal.Body>
            </Modal>
          )}
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
              <img src={Location} alt="location-pin-icon" className="contactDetailsImg" />
              &nbsp;&nbsp;&nbsp; Calgary, AB, Canada
            </p>
            <p className="contactDetails text-start">
              <img src={Email} alt="email-icon" className="contactDetailsImg" />
              &nbsp;&nbsp;&nbsp;
              <a className="email" href="mailto:codedashsign@gmail.com">
                codedashsign@gmail.com
              </a>
            </p>
            <br />
            <form
              id="contact-form"
              onSubmit={sendDiscord}
              method="POST"
              className="text-start"
            >
              <div className="form-group">
                <label className="formLabel" htmlFor="nameField">
                  To:
                </label>
                <input
                  readOnly
                  type="text"
                  id="toField"
                  name="toField"
                  className="inputField"
                  value="codedashsign@gmail.com"
                />
              </div>
              <br />
              <div className="form-group">
                <label className="formLabel" htmlFor="emailField">
                  From:
                </label>
                <input
                  type="email"
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
                  title="Please enter a valid email address"
                  id="emailField"
                  name="emailField"
                  placeholder="&#9998; Your Email"
                  required
                  className="inputField"
                />
              </div>
              <br />
              <div className="form-group">
                <label className="formLabel" htmlFor="orgField">
                  Name:
                </label>
                <input
                  type="text"
                  id="nameField"
                  name="nameField"
                  required
                  title="Please enter your name"
                  placeholder="&#9998; Your Name"
                  className="inputField"
                />
              </div>
              <br />
              <div className="form-group">
                <label className="formLabel" htmlFor="messageField">
                  Message:
                </label>
                <textarea
                  id="messageField"
                  name="messageField"
                  required
                  title="Please enter a message for us"
                  placeholder="&#9998; Your Message"
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
