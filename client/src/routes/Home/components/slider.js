
import { Container } from "react-bootstrap";
import "../components/home.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Slider() {
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
    // <Container className="pt-4 pb-4">
    //   <div className="sliderBox">
    //     <Carousel>
    //       <Carousel.Item>
    //         <img className="d-block w-100" src={img1} alt="First slide" />
    //         <Carousel.Caption>
    //           <h3 className="h3">First Title</h3>
    //         </Carousel.Caption>
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img className="d-block w-100" src={img1} alt="Second slide" />
    //         <Carousel.Caption>
    //           <h3 className="h3">Second Title</h3>
    //         </Carousel.Caption>
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img className="d-block w-100" src={img1} alt="Third slide" />
    //         <Carousel.Caption>
    //           <h3 className="h3">Third Title</h3>
    //         </Carousel.Caption>
    //       </Carousel.Item>
    //     </Carousel>

    //     <Row>
    //       <div className="col-lg text-center pt-2">
    //         <h4>Trusted By:</h4>
    //         <img src={logo1} width={"110px"} className="p-2" />
    //         <img src={logo1} width={"110px"} className="p-2" />
    //         <img src={logo1} width={"110px"} className="p-2" />
    //         <img src={logo1} width={"110px"} className="p-2" />
    //         <img src={logo1} width={"110px"} className="p-2" />
    //       </div>
    //     </Row>
    //   </div>
    // </Container>
    
   <>
   
      <div className="backgroundDiv text-center pt-5 pb-5">
        <h1 className="landingpageHeading pt-5">
          Discover Your Dream Career
        </h1>
        <h1 className="landingpageHeading">
          Explore Endless Possibilities
        </h1>
        <Container>
        <p className="landingpageText px-5 pt-4 pb-4">
          We believe in unlocking the potential of individuals and connecting
          them with endless opportunities. Our platform serves as a gateway to
          discovering your dream career and shaping your future. 
        </p>
        </Container>

        <button className="landingpageBtn" onClick={loginButton} >Get Hired Now!</button>
      </div>
    </>
  );
}

export default Slider;
