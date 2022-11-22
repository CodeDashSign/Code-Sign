import "./Works.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import shringar from "../Images/works/shringar_product.png";
import sneak from "../Images/works/sneak.png";
import ac from "../Images/works/ac2.png";

function Works() {
  return (
    <Container fluid className="WorksParent">
      <Container fluid className="Works" id="Works">
        <Row className="title">
          <h1 className="text-start WorksTitle">Some of our previous works</h1>
          <hr />
        </Row>
        <br />
        <br />
        <Row className="row1">
          <div className="work">
            <div className="workImg">
              <a
                href="https://shringar.beauty/"
                target="_blank"
                rel="noreferrer"
                className="worksHover"
              >
                <img src={shringar} alt="" className="productImg" />
              </a>
            </div>
          </div>
        </Row>
        <Row className="row1">
          <div className="work">
            <div className="workImg">
              <a
                href="https://sneakerseek.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                className="worksHover"
              >
                <img src={sneak} alt="" className="productImg" />
              </a>
            </div>
          </div>
        </Row>
        <Row className="row2">
          <Col lg={12} style={{ margin: "auto" }}>
            <div className="work">
              <div className="workImg">
                <a
                  href="https://aucciapplication.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="worksHover"
                >
                  <img src={ac} alt="" className="productImg" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Works;
