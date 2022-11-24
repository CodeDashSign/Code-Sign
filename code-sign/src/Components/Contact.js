import "./Contact.css";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <Container fluid className="contactParent">
      <Container fluid className="contact" id="contact">
        <Row>
          <h1>Get in Touch With Us!</h1>
          <p>
            We would love to work together with you and provide you the clean
            website your business needs to level up!
          </p>
        </Row>
        <Row className="contactCard">
          <Col xs={12} sm={12} md={12} lg={8} xl={8} className="contactForm">
            <form
              id="contact-form"
              //   onSubmit={this.handleSubmit.bind(this)}
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4} className="contactInfo">
            <p>BYE</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
