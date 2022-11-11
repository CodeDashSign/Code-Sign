import "./Experience.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Graph from "../Images/profile.png";

function Experience() {
  return (
    <Container fluid className="experienceParent">
      <Container fluid className="experience" id="experience">
        <Row className="title">
          <h1 className="text-start experienceTitle">Meet Our Team</h1>
          <hr className="titleLine" />
        </Row>
        <br />
        <br />
        <Row className="row1">
          <Col sm={12} md={6} lg={4} xl={4} xxl={4} className="sectionBox">
            <div>
            <img src={Graph} alt="" className="profileImg" />
            </div>
            <h4>Divyansh Goyal</h4>
            <h6>Full-Stack Developer</h6>
            
          </Col>
          <Col
            sm={12}
            md={6}
            lg={4}
            xl={4}
            xxl={4}
            className="sectionBox"
          ></Col>
          <Col
            sm={12}
            md={6}
            lg={4}
            xl={4}
            xxl={4}
            className="sectionBox"
          ></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col
            sm={12}
            md={6}
            lg={4}
            xl={4}
            xxl={4}
            className="sectionBox"
            style={{ float: "none", margin: "0 auto" }}
          ></Col>
          <Col
            sm={12}
            md={6}
            lg={4}
            xl={4}
            xxl={4}
            className="sectionBox"
            style={{ float: "none", margin: "0 auto" }}
          ></Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
