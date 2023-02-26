import "./Works.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import shringar from "../Images/works/shringar_product.png";
import sneak from "../Images/works/sneak.png";
import ac from "../Images/works/ac2.png";
import { useInView } from "react-intersection-observer";

function Works() {
  const { ref: worksRef, inView: worksVisible } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <Container fluid className="WorksParent">
      <Container fluid className="Works" id="Works" ref={worksRef}>
        <div
          className={`${"worksOrig"} ${
            worksVisible ? "worksAnim" : "worksOrig"
          }`}
        >
          <Row className="title">
            <h1 className="text-start WorksTitle">
              Some of Our Previous Works
            </h1>
            <hr className={`${""} ${worksVisible ? "hrLineAnim" : ""}`} />
          </Row>
          <br />
          <br />
          <Row className="text-center">
            <div className="work">
              <div className="workImg">
                <a
                  href="https://shringar.beauty/"
                  target="_blank"
                  rel="noreferrer"
                  className="worksHover"
                >
                  <img
                    src={shringar}
                    alt="shringar-website-preview"
                    className="productImg"
                  />
                </a>
              </div>
            </div>
          </Row>
          <Row className="text-center">
            <div className="work">
              <div className="workImg">
                <a target="_blank" rel="noreferrer" className="worksHover">
                  <img
                    src={sneak}
                    alt="sneakerseek-website-preview"
                    className="productImg"
                  />
                </a>
              </div>
            </div>
          </Row>
          <Row className="text-center">
            <Col lg={12} style={{ margin: "auto" }}>
              <div className="work">
                <div className="workImg">
                  <a rel="noreferrer" className="worksHover">
                    <img
                      src={ac}
                      alt="aucci-website-preview"
                      className="productImg"
                    />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <br />
        <br />
        <div className="text-center">
          <Button
            href="contact"
            className={`${"worksButtonOrig"} ${
              worksVisible ? "worksButtonAnim" : "worksButtonOrig"
            }`}
          >
            <span>Ready to Get in Touch?</span>
            <span className="arrow"> &#8594;</span>
          </Button>
        </div>
      </Container>
    </Container>
  );
}

export default Works;
