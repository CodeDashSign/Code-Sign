import "./Mission.css";
import { Container, Row, Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import Principles from "./Principles";

function Mission() {
  const { ref: missionRef, inView: missionVisible } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <Container fluid className="missionParent">
      <Container fluid className="mission" id="mission" ref={missionRef}>
        <Row
          className={`${"missionOrig"} ${
            missionVisible ? "processAnim" : "missionOrig"
          }`}
        >
          <Row className="title">
            <h1 className="whyTitle">The Code-Sign Way</h1>
            <hr className="titleLine" />
          </Row>
          <Col
            sm={12}
            md={12}
            lg={12}
            xl={12}
            xxl={12}
            style={{
              display: "flex",
              alignItems: "center",
            }}
            className="m-auto"
          >
            <p className="missionText text-xl-center text-lg-center text-md-left text-sm-left text-xs-left">
              Code-Sign was created by a couple of ambitious university students
              who wanted to create clean and modern websites to provide
              businesses and individuals the edge they needed to level up their
              digital presence.
            </p>
          </Col>
          <Principles />
        </Row>
      </Container>
    </Container>
  );
}

export default Mission;
