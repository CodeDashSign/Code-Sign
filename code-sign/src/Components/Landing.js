import { Container, Row } from "react-bootstrap";
import MainLogo from "../Images/logo.png";
import "./Landing.css";
import { useInView } from "react-intersection-observer";

function Landing() {
  const { ref: missionRef, inView: missionVisible } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <Container fluid className="landingParent">
      <Container fluid className="landing" id="landing" ref={missionRef}>
        <Row className="m-auto">
          <img
            src={MainLogo}
            alt=""
            className={`${"mx-auto img-fluid landingLogo"} ${
              missionVisible ? "imgLanding" : ""
            }`}
          />
        </Row>
        <Row>
          <div className={`${""} ${missionVisible ? "subTitle" : ""}`}>
            <p>Together, we can upgrade your business, one pixel at a time</p>
            <a href="#why" className="landingBtn">
              Digitize Your Business With Us
            </a>
          </div>
        </Row>
      </Container>
    </Container>
  );
}

export default Landing;
