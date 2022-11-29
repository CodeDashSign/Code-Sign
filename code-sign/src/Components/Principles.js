import "./Principles.css";
import { Container, Row, Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import graph from "../Images/graph.png";

function Principles() {
  const { ref: principlesRef, inView: principlesVisible } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <Container fluid className="principlesParent">
      <Container
        fluid
        className="principles"
        id="principles"
        ref={principlesRef}
      >
        <Row
          className={`${"text-center principlesOrig"} ${
            principlesVisible ? "principlesAnim" : "principlesOrig"
          }`}
          style={{ margin: "auto" }}
        >
          <Row className="title">
            <h1 className="principleTitle">What is Most Important to Us</h1>
          </Row>
            <Col>
              <img className="principlespicture" src={graph} />
              <Col > <div className="principleText"> Client Focused </div> </Col>
            </Col>
            <Col>
              <img className="principlespicture" src={graph} />
              <Col> <div className="principleText"> User Experience </div> </Col>
            </Col>
            <Col>
              <img className="principlespicture" src={graph} />
              <Col > <div className="principleText"> Adding Value </div> </Col>
            </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Principles;
