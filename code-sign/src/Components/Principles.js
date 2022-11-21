import "./Principles.css";
import { Container, Row, Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import graph from "../Images/graph.png";
// import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

function Principles() {
  return (
    <Container fluid className="principlesParent">
      <Container fluid className="principles" id="principles">
        <Row className="text-center" style={{ margin: "auto" }}>
          <Row className="title">
            <h1 className="principleTitle">What is Most Important to Us</h1>
          </Row>
          <div class="rectangle"></div>
        </Row>
      </Container>
    </Container>
  );
}

export default Principles;
