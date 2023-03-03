import { Container, Row } from "react-bootstrap";
import MainLogo from "../Images/Axiom_main_logo.svg";
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
            alt="main-company-logo"
            className={`${"mx-auto img-fluid landingLogo"} ${
              landingVisible ? "imgLanding" : ""
            }`}
          />
        </Row>
        <Row>
          <div className={`${""} ${landingVisible ? "subTitle" : ""}`}>
            <p className="text-center">
              Digitize your business with us, one pixel at a time.
            </p>
            <a href="#mission">
              <div className="scrollAnim">
                <div className="mouse">
                  <div className="movingPiece"></div>
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
