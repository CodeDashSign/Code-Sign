import "./Principles.css";
import { Container, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
// import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

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
          <div className="rectangle"></div>
        </Row>
      </Container>
    </Container>
  );
}

export default Principles;
