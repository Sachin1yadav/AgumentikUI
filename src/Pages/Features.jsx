import React, { useEffect } from "react";
import Portfolio from "./Portfolio";
import Partners from "./Partners";
import Projects from "./Projects";
import Aos from "aos";

const Features = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="ProductsMainDiv">
        <div className="ProductsInfoDiv" data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
          <h1>What make us stand out of ordinary.</h1>
          <p>We in creativity, quality, abilities and relations.</p>
        </div>
        <div className="ProductsImgDiv" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
          <img
            src="https://www.agumentik.com/images/resource/stand_out.svg"
            alt=""
          />
        </div>
      </div>
      <Portfolio />
      <Partners/>
      <Projects/>
    </div>
  );
};

export default Features;
