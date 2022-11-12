import "./Mission.css";
import Graph from "../Images/graph.jpg";
import { Container, Row, Col } from "react-bootstrap";

function Mission() {
  return (
    <Container fluid className="missionParent">
      <Container fluid className="mission" id="mission">
        <Row>
          <Col
            sm={12}
            md={12}
            lg={6}
            xl={6}
            xxl={6}
            style={{
              display: "flex",
              alignItems: "center",
            }}
            className="d-none d-lg-block hidden-lg-down m-auto"
          >
            <img
              src={Graph}
              style={{ borderRadius: "30px" }}
              className="d-none d-lg-block mx-auto img-fluid"
            />
          </Col>
          <Col
            sm={12}
            md={12}
            lg={6}
            xl={6}
            xxl={6}
            style={{
              display: "flex",
              alignItems: "center",
            }}
            className="d-none d-lg-block hidden-lg-down m-auto"
          >
            <p className="missionText">
              Code-Sign was created by a few university students who wanted to
              put their technical abilities 
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Mission;
