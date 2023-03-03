import "./Team.css";
import { Container, Row, Col } from "react-bootstrap";
import Nishant from "../Images/Team/nishant.jpg";
import Div from "../Images/Team/div.jpg";
import Anish from "../Images/Team/anish.jpg";
import Kenneth from "../Images/Team/kenneth.jpg";
import { useInView } from "react-intersection-observer";

function Team() {
  const { ref: teamRef, inView: teamVisible } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <Container fluid className="TeamParent" ref={teamRef}>
      <Container
        fluid
        className={`${"Team TeamOrig"} ${
          teamVisible ? "TeamAnim" : "TeamOrig"
        }`}
        id="Team"
      >
        <Row className="title">
          <h1 className="text-start TeamTitle">Meet Our Team</h1>
          <hr className={`${""} ${teamVisible ? "hrLineAnim" : ""}`} />
        </Row>
        <br />
        <br />
        <Row className="row1">
          <Col
            sm={12}
            md={6}
            lg={3}
            xl={3}
            xxl={3}
            className="sectionBox text-center"
          >
            <a href="https://divgoyal.tech/" target={"_blank"} rel="noreferrer">
              <div className="pfp">
                <img src={Div} alt="Divyansh Goyal" className="profileImg" />
              </div>
              <h4>Divyansh Goyal</h4>
              <h6>Full-Stack Developer</h6>
              <h6>Software Engineering & Business @ University of Calgary</h6>
            </a>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={3}
            xl={3}
            xxl={3}
            className="sectionBox text-center"
          >
            <a
              href="https://www.linkedin.com/in/nishant-sr/"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className="pfp">
                <img
                  src={Nishant}
                  alt="Nishant Srinivasan"
                  className="profileImg"
                />
              </div>
              <h4>Nishant Srinivasan</h4>
              <h6>Graphic Designer</h6>
              <h6>Computer Science @ University of British Columbia</h6>
            </a>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={3}
            xl={3}
            xxl={3}
            className="sectionBox text-center"
          >
            <a
              href="https://www.linkedin.com/in/kenneth-lai1/"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className="pfp">
                <img src={Kenneth} alt="Kenneth Lai" className="profileImg" />
              </div>
              <h4>Kenneth Lai</h4>
              <h6>Marketing</h6>
              <h6>Accounting @ Western University </h6>
            </a>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={3}
            xl={3}
            xxl={3}
            className="sectionBox text-center"
          >
            <a
              href="https://www.linkedin.com/in/anish-singla/"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className="pfp">
                <img src={Anish} alt="Anish Singla" className="profileImg" />
              </div>
              <h4>Anish Singla</h4>
              <h6>Back-End Developer</h6>
              <h6>Data Science @ University of Toronto </h6>
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Team;
