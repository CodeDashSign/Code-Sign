import "./Mission.css";
import { Container, Row, Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

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
            <p className="missionText">
              Code-Sign was created by a couple of ambitious university students
              who wanted to create clean and modern websites to provide
              businesses and individuals the edge they needed to level up their
              digital presence.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Mission;
