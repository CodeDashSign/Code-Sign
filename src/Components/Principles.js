import "./Principles.css";
import { Row, Col } from "react-bootstrap";
import Mobile from "../Images/ui.svg";
import Handshake from "../Images/shake.svg";
import Money from "../Images/rocket.svg";

function Principles() {
  return (
    <Row className="principlesRow text-center">
      <Col sm={12} md={12} lg={4} xl={4} xxl={4} className="principlesCol">
        <img className="principlespicture" alt="" src={Handshake} />
        <Col>
          {" "}
          <div className="principleText"> Client Focused </div>{" "}
        </Col>
      </Col>
      <Col sm={12} md={12} lg={4} xl={4} xxl={4} className="principlesCol">
        <img className="principlespicture" alt="" src={Mobile} />
        <Col>
          <div className="principleText"> User Experience </div>{" "}
        </Col>
      </Col>
      <Col sm={12} md={12} lg={4} xl={4} xxl={4} className="principlesCol">
        <img className="principlespicture" alt="" src={Money} />
        <Col>
          <div className="principleText"> Adding Value </div>{" "}
        </Col>
      </Col>
    </Row>
  );
}

export default Principles;
