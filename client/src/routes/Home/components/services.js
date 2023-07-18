import service1 from "../../../assests/images/Service 1.png";
import service2 from "../../../assests/images/Service 2.png";
import service3 from "../../../assests/images/Service 3.png";

import {  Card } from "react-bootstrap";
import "../components/home.css";

function Services() {
  return (
    <>
      {/* <Row className="p-5">
        <h2 className="text-center pt-5">Our Services</h2>
        <div className="col-lg">
          <Card className="servicesContainer mt-3 mb-3">
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>
                <h3>Card Title</h3>
              </Card.Title>
              <br></br>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <br></br>
              <button className="servicesBtn mb-3">Learn More</button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg">
          <Card className="servicesContainer mt-3 mb-3">
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>
                <h3>Card Title</h3>
              </Card.Title>
              <br></br>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <br></br>
              <button className="servicesBtn mb-3">Learn More</button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg">
          <Card className="servicesContainer mt-3 mb-3">
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>
                <h3>Card Title</h3>
              </Card.Title>
              <br></br>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <br></br>
              <button className="servicesBtn mb-3">Learn More</button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg">
          <Card className="servicesContainer mt-3 mb-3">
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>
                <h3>Card Title</h3>
              </Card.Title>
              <br></br>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <br></br>
              <button className="servicesBtn mb-3">Learn More</button>
            </Card.Body>
          </Card>
        </div>
      </Row> */}
      <div className=" pb-5">
        <div className="text-center pt-5">
          <h1 id="services" className="homepageServicesHeading pt-5">Our Services</h1>
          {/*<p className="homepageServicesParagraph pt-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going te. The generated Lorem Ipsum is
            therefore always free fr
    </p>*/}
        </div>

        <div className="servicesCards mx-5 pt-5 pb-3">
          <Card className="service1Card">
            <Card.Img variant="top" src={service1} />
            <Card.Body>
              <Card.Title className="serviceCardTitle mb-3 p-2">1:1 counseling</Card.Title>
              <Card.Text className="serviceCardText p-2">
                <ol>
                  <li>Personalized 1:1 counseling for transformative growth and well-being.</li>
                  <li>Unlock your potential with our empowering 1:1 counseling services.</li>
                  <li>Discover personal insights and strategies for positive change through our confidential 1:1 counseling sessions.</li>
                </ol>
              </Card.Text>
              
            </Card.Body>
          </Card>

          <Card className="service2Card">
            <Card.Img variant="top" src={service2} />
            <Card.Body>
              <Card.Title className="serviceCardTitle mb-3 p-2">Auto Profile matching</Card.Title>
              <Card.Text className="serviceCardText p-2">
                <ol>
                  <li>AI-powered job matching for efficient and accurate candidate selection.</li>
                  <li>Advanced technology analyzes job requirements and candidate profiles.</li>
                  <li>Increase the chances of hiring the perfect fit for your organization.</li>
                </ol>
              </Card.Text>
              
            </Card.Body>
          </Card>

          <Card className="service3Card">
            <Card.Img variant="top" src={service3} />
            <Card.Body>
              <Card.Title className="serviceCardTitle mb-3 p-2">AR/VR Interview</Card.Title>
              <Card.Text className="serviceCardText p-2">
                <ol>
                  <li>Immersive AR/VR interviews for a unique candidate experience.</li>
                  <li>Interactive assessments to evaluate technical skills and creativity.</li>
                  <li>Real-time feedback and analytics for informed hiring decisions.</li>
                </ol>
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Services;
