import "./Principles.css";
import { Row, Col } from "react-bootstrap";
import graph from "../Images/graph.png";

function Principles() {
  return (
    <Row className="principlesRow">
      <Col sm={12} md={12} lg={4} xl={4} xxl={4} className="principlesCol">
        <img className="principlespicture" alt="" src={graph} />
        <Col>
          {" "}
          <div className="principleText"> Client Focused </div>{" "}
        </Col>
      </Col>
      <Col sm={12} md={12} lg={4} xl={4} xxl={4} className="principlesCol">
        <img className="principlespicture" alt="" src={graph} />
        <Col>
          <div className="principleText"> User Experience </div>{" "}
        </Col>
      </Col>
      <Col sm={12} md={12} lg={4} xl={4} xxl={4} className="principlesCol">
        <img className="principlespicture" alt="" src={graph} />
        <Col>
          <div className="principleText"> Adding Value </div>{" "}
        </Col>
      </Col>
    </Row>
  );
}

export default Principles;
