import "./Team.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Graph from "../Images/profile.png";
import Nishant from "../Images/Team/nishant.jpg"
import Div from "../Images/Team/div.jpg"
import Anish from "../Images/Team/anish.jpg"
import Kenneth from "../Images/Team/kenneth.png"

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
              <img src={Div} alt="" className="profileImg" />
            </div>
            <h4>Divyansh Goyal</h4>
            <h6>Full-Stack Developer , Graphic Designer</h6>
            <h7> - @ University of Calgary</h7>
          </Col>
          <Col sm={12} md={6} lg={3} xl={3} xxl={3} className="sectionBox">
            <div class="pfp">
              <img src={Nishant} alt="" className="profileImg" />
            </div>
            <h4>Nishant Srinivasan</h4>
            <h6>Full-Stack Developer , Graphic Designer</h6>
            <h7>Computer Science @ University of British Columbia</h7>
          </Col>
          <Col sm={12} md={6} lg={3} xl={3} xxl={3} className="sectionBox">
            <div class="pfp">
              <img src={Kenneth} alt="" className="profileImg" />
            </div>
            <h4>Kenneth Lai</h4>
            <h6>Marketing Lead, Graphic Designer</h6>
            <h7> - @ Western University </h7>
          </Col>
          <Col sm={12} md={6} lg={3} xl={3} xxl={3} className="sectionBox">
            <div class="pfp">
              <img src={Anish} alt="" className="profileImg" />
            </div>
            <h4>Anish Singla</h4>
            <h6>Full-Stack Developer</h6>
            <h7> - @ University of Toronto </h7>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Team;
