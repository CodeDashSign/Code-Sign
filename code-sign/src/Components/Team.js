import "./Team.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Graph from "../Images/profile.png";
import Nishant from "../Images/Team/nishant.jpg"

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
            <div class="pfp">
              <img src={Graph} alt="" className="profileImg" />
            </div>
            <h4>Divyansh Goyal</h4>
            <h6>Full-Stack Developer , Graphic Designer</h6>
            <h7> - @ University </h7>
          </Col>
          <Col sm={12} md={6} lg={3} xl={3} xxl={3} className="sectionBox">
            <div class="pfp">
              <img src={Nishant} alt="" className="profileImg" />
            </div>
            <h4>Nishant Srinivasan</h4>
            <h6>Full-Stack Developer , Graphic Designer</h6>
            <h7>Computer Science @ UBC</h7>
          </Col>
          <Col sm={12} md={6} lg={3} xl={3} xxl={3} className="sectionBox">
            <div class="pfp">
              <img src={Graph} alt="" className="profileImg" />
            </div>
            <h4>Kenneth Lai</h4>
            <h6>Marketing Lead, Graphic Designer</h6>
            <h7> - @ University </h7>
          </Col>
          <Col sm={12} md={6} lg={3} xl={3} xxl={3} className="sectionBox">
            <div class="pfp">
              <img src={Graph} alt="" className="profileImg" />
            </div>
            <h4>Anish Singla</h4>
            <h6>Full-Stack Developer</h6>
            <h7> - @ University </h7>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Team;
