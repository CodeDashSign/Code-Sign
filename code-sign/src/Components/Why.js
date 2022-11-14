import { Container, Row, Col } from "react-bootstrap";
import Graph from "../Images/graph.jpg";
import "./Why.css";

function Why() {
  return (
    <Container fluid className="whyParent">
      <Container fluid className="why" id="why">
        <Row className="title">
          <h1 className="text-start whyTitle">
            <b>A Website To Fuel Your Ambitions</b>
          </h1>
          <hr className="titleLine" />
        </Row>
        <br />
        <br />
        <Row>
          <Col sm={12} md={12} lg={6} xl={6} xxl={6} className="sectionBox">
            <Row className="whySection">
              <h2 className="text-start">
                <b>Increase Your Credibility</b>
              </h2>
              <ul>
                <li className="text-start">
                  75% of today's consumers argue that they gauge a company's{" "}
                  <b className="mainPoints">credibility based on its website</b>
                  . This demands a professional web presences, the start of
                  which is a functional webpage.
                </li>
              </ul>
            </Row>
            <br />
            <Row className="whySection">
              <h2 className="text-start">
                <b>Gain Essential Insights</b>
              </h2>
              <ul>
                <li className="text-start">
                  A website allows you to{" "}
                  <b className="mainPoints">extract key insights</b> such as
                  devices potential customers use, the times they view the
                  website, and the avenues they took to visit the website. This
                  data can be used for more effective advertising and product
                  placement.
                </li>
              </ul>
            </Row>
            <br />
            <Row className="whySection">
              <h2 className="text-start">
                <b>Proven Success</b>
              </h2>
              <ul>
                <li className="text-start">
                  The majority of businesses have a digitial presence due to its
                  proven success rate. In fact, 92% of business owners believe
                  having a website{" "}
                  <b className="mainPoints">
                    contributes effectively to their digital marketing strategy
                  </b>
                  .
                </li>
              </ul>
            </Row>
          </Col>
          <Col
            lg={6}
            style={{
              display: "flex",
              alignItems: "center",
            }}
            className="d-none d-lg-block hidden-lg-down m-auto"
          >
            <img
              src={Graph}
              alt=""
              style={{ borderRadius: "30px" }}
              className="d-none d-lg-block mx-auto img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Why;