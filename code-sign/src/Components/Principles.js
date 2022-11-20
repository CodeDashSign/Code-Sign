import "./Principles.css";
import { Container, Row, Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

function Principles() {
  return (
    <Container fluid className="principlesParent">
      <Container fluid className="principles" id="principles">
        <Row></Row>
      </Container>
    </Container>
  );
}

export default Principles;
