import "./Works.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import shringar from "../Images/works/shringar_product.png";
import sneak from "../Images/works/sneak.png";
import ac from "../Images/works/ac.png";

function Works() {
  return (
    <Container fluid className="WorksParent">
      <Container fluid className="Works" id="Works">
        <Row className="title">
          <h1 className="text-start WorksTitle">Some of our previous works</h1>
          {/* <hr className="titleLine" /> */}
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
              >
                <img src={shringar} alt="" className="productImg" />
              </a>
            </div>

            <div className="workDesc">
              <h4>Shringar</h4>
              <h6>Beauty Salon</h6>
            </div>
          </div>
        </Row>
        <Row className="row1">
          <div className="work">
            <div className="workImg">
              <a
                href="https://shringar.beauty/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={sneak} alt="" className="productImg" />
              </a>
            </div>

            <div className="workDesc">
              <h4>Sneaker-Seek</h4>
              <h6>Beauty Salon</h6>
            </div>
          </div>
        </Row>
        <Row className="row1">
          <div className="work">
            <div className="workImg">
              <a
                href="https://shringar.beauty/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={ac} alt="" className="productImg" />
              </a>
            </div>

            <div className="workDesc">
              <h4>Aucci</h4>
              <h6>Beauty Salon</h6>
            </div>
          </div>
        </Row>
      </Container>
    </Container>
  );
}

export default Works;
