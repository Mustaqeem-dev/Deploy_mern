import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header";
import Slider from "./components/slider";
import Services from "./components/services";
import BestPart from "./components/bestPart";

import WhyUs from "./components/whyUs";

import Footer from "./components/footer";
import TrustedBy from "./components/TrustedBy";
import Newsletter from "./components/Newsletter";

function Homepage() {
  return (
    <>
      <Header />
      <Slider />
      {/*<TrustedBy />*/}
      <Services />
      <BestPart />

      <WhyUs />
      <Newsletter />

      <Footer />
    </>
  );
}

export default Homepage;
