import "./Works.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Graph from "../Images/profile.png";

function Works(){
    return(
    <Container fluid className="WorksParent">
      <Container fluid className="Works" id="Works">
        <Row className="title">
          <h1 className="text-start WorksTitle">Some of our previous works</h1>
          <hr className="titleLine" />
        </Row>
        <br />
        <br />
        <Row className="row1">
          <Col sm={3} md={6} lg={3} xl={3} xxl={3} className="sectionBox">
            <div>
              <img src={Graph} alt="" className="profileImg" />
            </div>
            <h4>Shringar</h4>
            <h6>Beauty Salon</h6>
          </Col>
        </Row>
      </Container>
    </Container>
    );
}

export default Works;