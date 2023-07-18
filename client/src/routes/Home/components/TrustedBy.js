import "../components/home.css";

import walmart from "../../../assests/images/walmart.png";
import google from "../../../assests/images/google.png";
import fedx from "../../../assests/images/fedX.png";
import fedex from "../../../assests/images/fedEx.png";
import microsoft from "../../../assests/images/microsoft.png";
import amazon from "../../../assests/images/amazon.png";
import ola from "../../../assests/images/ola.png";
function TrustedBy() {
  return (
    <>
      <div className="pt-5 pb-5">
        <div className="container trustedByImgContainer pt-5 pb-2">
          <div className="trustedByImg text-center mx-3">
            <img src={fedex} />
          </div>
          <div className="trustedByImg text-center mx-3">
            <img src={google} />
          </div>
          <div className="trustedByImg text-center mx-3">
            <img src={ola} />
          </div>
          <div className="trustedByImg text-center mx-3">
            <img src={microsoft} />
          </div>
        </div>

        <div className="container trustedByImgContainer pb-5 pt-2">
          <div className="trustedByImg text-center mx-3">
            <img src={amazon} />
          </div>
          <div className="trustedByImg text-center mx-3">
            <img src={fedx} />
          </div>
          <div className="trustedByImg text-center mx-3">
            <img src={walmart} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TrustedBy;
