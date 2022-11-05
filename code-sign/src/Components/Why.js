import { Container, Row, Col } from "react-bootstrap";
import Graph from "../Images/graph.png";
import "./Why.css";

function Why() {
  return (
    <Container className="why" id="why">
      <Row>
        <h1 className="text-start whyTitle">
          A Website To Fuel Your Ambitions
        </h1>
      </Row>
      <br />
      <Row>
        <Col sm={6} md={6} lg={6}>
          <Row className="whySection">
            <h2 className="text-start">Increase Your Credibility</h2>
            <ul>
              <li className="text-start">
                75% of today's consumers argue that they gauge a company's{" "}
                <b className="mainPoints">credibility based on its website</b>.
                This demands a professional web presences, the start of which is
                a functional webpage.
              </li>
            </ul>
          </Row>
          <br />
          <Row className="whySection">
            <h2 className="text-start">Gain Essential Insights</h2>
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
            <h2 className="text-start">Proven Success</h2>
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
        <Col sm={6} md={6} lg={6}>
          <img src={Graph} alt="" />
        </Col>
      </Row>
    </Container>
  );
}

export default Why;
