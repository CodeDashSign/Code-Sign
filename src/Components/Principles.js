import "./Principles.css";
import { Row, Col } from "react-bootstrap";
import Mobile from "../Images/ui.svg";
import Handshake from "../Images/shake.svg";
import Money from "../Images/rocket.svg";

function Principles() {
  return (
    <Row className="principlesRow text-center justify-content-center">
      <Col sm={10} md={8} lg={3} xl={3} xxl={3} className="principlesCol">
        <div className="trial">
          <div className="content">
            <img
              className="principlespicture"
              alt="client-focused-img"
              src={Handshake}
            />
            <Col>
              {" "}
              <div className="principleText"> Client Focused </div>{" "}
            </Col>
          </div>
        </div>
      </Col>
      <Col sm={0} md={0} lg={1} xl={1} xxl={1}></Col>
      <br className="d-lg-none" />
      <Col sm={10} md={8} lg={3} xl={3} xxl={3} className="principlesCol">
        <div className="trial">
          <div className="content">
            <img
              className="principlespicture"
              alt="user-experience-img"
              src={Mobile}
            />
            <Col>
              <div className="principleText"> User Experience </div>{" "}
            </Col>
          </div>
        </div>
      </Col>
      <Col sm={0} md={0} lg={1} xl={1} xxl={1}></Col>
      <br className="d-lg-none" />
      <Col sm={10} md={8} lg={3} xl={3} xxl={3} className="principlesCol">
        <div className="trial">
          <div className="content">
            <img
              className="principlespicture"
              alt="adding-value-img"
              src={Money}
            />
            <Col>
              <div className="principleText"> Adding Value </div>{" "}
            </Col>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Principles;
