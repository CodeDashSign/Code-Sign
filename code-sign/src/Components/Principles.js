import "./Principles.css";
import { Container, Row, Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import graph from "../Images/graph.png";

function Principles() {
  return (
    <Container fluid className="principlesParent">
      <Container fluid className="principles" id="principles">
        <Row className="text-center" style={{ margin: "auto" }}>
          <Col>
            <img src={graph} width={"100%"} />
          </Col>
          <Col>
            <img src={graph} width={"100%"} />
          </Col>
          <Col>
            <img src={graph} width={"100%"} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Principles;
