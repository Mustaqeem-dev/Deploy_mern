import "../components/home.css";
import company from "../../../assests/images/For Company.png";
import talent from "../../../assests/images/For Talent.png";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function BestPart() {
  const navigate = useNavigate();
      const [showCarousel, setShowCarousel] = useState(false);
      function loginButton() {
        navigate("/Login");
      }
      const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    
      };
  return (
    <>
   

      {/* <Container className="pt-5 pb-5">
        <Row className="pt-3 pb-5">
          <Col lg={6} className="my-auto p-2">
            <div className="px-5">
              <h2 className="bestPartCompHeading1 mb-2">For Company</h2>
              <h1 className="bestPartCompHeading2 mb-2">
                This is how good comapanices find good work
              </h1>
              <p className="bestPartCompText">
                Use smart proposals that also seamlessly generate contracts,
                collect deposits, and so much more.
              </p>
              <button className="bestPartCompBtn">Hire a Team</button>
            </div>
          </Col>
          <Col lg={6} className="text-center">
            <img className="bestPartCompImg" src={company} alt="abcd" />
          </Col>
        </Row>
      </Container> */}
      <br></br>
      <br></br>
      <Container className="pt-5 pb-5">
        <Row className="pt-3 pb-5">
          <Col lg={6} className="text-center">
            <img className="bestPartTalentImg" src={talent} alt="defs"/>
          </Col>
          <Col lg={6} className="my-auto p-2">
            <div className="px-5">
              {/*<h2 className="bestPartTalentHeading1 mb-2">For Talent</h2>*/}
              <h1 className="bestPartTalentHeading2 mb-2">
                Find Jobs your way
              </h1>
              <p className="bestPartTalentText">
              Discover endless opportunities and pave your own path to success with 
              our tailored job search solutions.
              </p>
              <button className="getHiredBtnH" onClick={loginButton}>Get Hired Now</button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BestPart;
