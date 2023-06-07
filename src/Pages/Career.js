import React, { useEffect } from "react";
import "../Style/Products.css";
import Aos from "aos";

const Career = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="ProductsMainDiv">
      <div className="ProductsInfoDiv" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
        <h1>We strive for talented, innovationary and creative individuals.</h1>
        <p>
          We strive to provide you with the best solutions to the needs of your
          business system. As a company, we value your obstacles and objectives
          and develop solutions that best satisfy your demands. We offer your
          business strong and adequate solutions with lasting impact.
        </p>
      </div>
      <div className="ProductsImgDiv" data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
        <img
          src="https://www.agumentik.com/images/resource/career.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Career;
