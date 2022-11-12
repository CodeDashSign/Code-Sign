import "./Team.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Graph from "../Images/profile.png";

function Team() {
  return (
    <Container fluid className="TeamParent">
      <Container fluid className="Team" id="Team">
        <Row className="title">
          <h1 className="text-start TeamTitle">Meet Our Team</h1>
          <hr className="titleLine" />
        </Row>
        <br />
        <br />
        <Row className="row1">
          <Col sm={12} md={6} lg={3} xl={3} xxl={3} className="sectionBox">
            <div>
              <img src={Graph} alt="" className="profileImg" />
            </div>
            <h4>Divyansh Goyal</h4>
            <h6>Full-Stack Developer</h6>
          </Col>
          <Col sm={12} md={6} lg={3} xl={3} xxl={3} className="sectionBox">
            <div>
              <img src={Graph} alt="" className="profileImg" />
            </div>
            <h4>Divyansh Goyal</h4>
            <h6>Full-Stack Developer</h6>
          </Col>
          <Col sm={12} md={6} lg={3} xl={3} xxl={3} className="sectionBox">
            <div>
              <img src={Graph} alt="" className="profileImg" />
            </div>
            <h4>Divyansh Goyal</h4>
            <h6>Full-Stack Developer</h6>
          </Col>
          <Col sm={12} md={6} lg={3} xl={3} xxl={3} className="sectionBox">
            <div>
              <img src={Graph} alt="" className="profileImg" />
            </div>
            <h4>Divyansh Goyal</h4>
            <h6>Full-Stack Developer</h6>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Team;
