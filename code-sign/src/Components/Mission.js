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
            className="m-auto"
          >
            <img
              src={Graph}
              style={{ borderRadius: "30px" }}
              className="mx-auto img-fluid"
              alt=""
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
            className="m-auto"
          >
            <p className="missionText">
              Code-Sign was created by a few university students who wanted to
              put their technical abilities to the test whilst helping
              businesses and individuals expand their digital presence through
              clean websites with a focus on user experience. Our team is
              composed of members who are well versed in front-end and back-end
              web technologies, marketing, social media, and more, all of which
              we use to offer well-rounded services for all our clients.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Mission;
