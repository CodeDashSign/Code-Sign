import { Container, Row, Col, Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import "./Process.css";

function Process() {
  const { ref: processRef, inView: processVisible } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <Container fluid className="processParent">
      <Container fluid className="process" id="process" ref={processRef}>
        <Row className="title">
          <h1 className="whyTitle">The Code-Sign Process</h1>
          <hr className="titleLine" />
        </Row>
        <br />
        <br />
        <div className="processRects">
          <Row
            className={`${"processRect"} ${
              processVisible ? "processRect1" : "hidden"
            }`}
          >
            <Col
              sm={2}
              md={2}
              lg={2}
              xl={2}
              xxl={2}
              className="justify-content-center align-items-center d-flex colNumeral"
            >
              I
            </Col>
            <Col className="justify-content-center align-items-center d-flex">
              Initial client meeting to understand website goals
            </Col>
          </Row>
          <br />
          <Row
            className={`${"processRect"} ${
              processVisible ? "processRect2" : "hidden"
            }`}
          >
            <Col
              sm={2}
              md={2}
              lg={2}
              xl={2}
              xxl={2}
              className="justify-content-center align-items-center d-flex colNumeral"
            >
              II
            </Col>
            <Col
              sm={10}
              md={10}
              lg={10}
              xl={10}
              xxl={10}
              className="justify-content-center align-items-center d-flex"
            >
              Defining client needs, deadlines, and designing solutions
            </Col>
          </Row>
          <br />
          <Row
            className={`${"processRect"} ${
              processVisible ? "processRect3" : "hidden"
            }`}
          >
            <Col
              sm={2}
              md={2}
              lg={2}
              xl={2}
              xxl={2}
              className="justify-content-center align-items-center d-flex colNumeral"
            >
              III
            </Col>
            <Col
              sm={10}
              md={10}
              lg={10}
              xl={10}
              xxl={10}
              className="justify-content-center align-items-center d-flex"
            >
              Iterative development with a focus on client feedback
            </Col>
          </Row>
          <br />
          <Row
            className={`${"processRect"} ${
              processVisible ? "processRect4" : "hidden"
            }`}
          >
            <Col
              sm={2}
              md={2}
              lg={2}
              xl={2}
              xxl={2}
              className="justify-content-center align-items-center d-flex colNumeral"
            >
              IV
            </Col>
            <Col
              sm={10}
              md={10}
              lg={10}
              xl={10}
              xxl={10}
              className="justify-content-center align-items-center d-flex"
            >
              Client review of completed website prototype
            </Col>
          </Row>
          <br />
          <Row
            className={`${"processRect"} ${
              processVisible ? "processRect5" : "hidden"
            }`}
          >
            <Col
              sm={2}
              md={2}
              lg={2}
              xl={2}
              xxl={2}
              className="justify-content-center align-items-center d-flex colNumeral"
            >
              V
            </Col>
            <Col
              sm={10}
              md={10}
              lg={10}
              xl={10}
              xxl={10}
              className="justify-content-center align-items-center d-flex"
            >
              Website deployment followed by client success
            </Col>
          </Row>
        </div>
        <Button
          href="experience"
          className={`${"meetTeamButtonOrig"} ${
            processVisible ? "meetTeamButtonAnim" : "meetTeamButtonOrig"
          }`}
        >
          <span>Ready to Meet Our Team?</span>
          <span className="arrow"> &#8594;</span>
        </Button>
      </Container>
    </Container>
  );
}

export default Process;
