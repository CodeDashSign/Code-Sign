import { Container, Row } from "react-bootstrap";
import MainLogo from "../Images/white_logo.png";
import "./Landing.css";
import { useInView } from "react-intersection-observer";

function Landing() {
  const { ref: landingRef, inView: landingVisible } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <Container fluid className="landingParent">
      <Container fluid className="landing" id="landing" ref={landingRef}>
        <Row
          className={`${"m-auto landingHidden"} ${
            landingVisible ? "landingHidden" : "landingShown"
          }`}
        >
          <img
            src={MainLogo}
            alt=""
            className={`${"mx-auto img-fluid landingLogo"} ${
              landingVisible ? "imgLanding" : ""
            }`}
          />
        </Row>
        <Row>
          <div className={`${""} ${landingVisible ? "subTitle" : ""}`}>
            <p>Digitize your business with us, one pixel at a time.</p>
            <a href="#mission">
              <div className="scroll-downs">
                <div className="mousey">
                  <div className="scroller"></div>
                </div>
              </div>
            </a>
          </div>
        </Row>
      </Container>
    </Container>
  );
}

export default Landing;
