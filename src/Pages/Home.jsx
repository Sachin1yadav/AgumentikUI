import React, { useEffect } from "react";
import "../Style/Home.css";
import Portfolio from "./Portfolio";
import T from "./T";
import Partners from "./Partners";
import Projects from "./Projects";
 
import { FaLongArrowAltRight } from 'react-icons/fa';
import Aos from "aos";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="HomeBobble"></div>
      <div className="HomeDiv">
        <div className="MainHomeDiv" >
          <div className="MainHomeInfoDiv" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
            <h2>Agumentik</h2>
            <p>
              We are the fastest growing startup in India for designing
              Software, Website Development, App Development, Animation, Game
              Designing and Digital Marketing Era.
            </p>
            <button>Inquire Now  <FaLongArrowAltRight/>  </button>
          </div>
          <div className="MainHomeImgDiv" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
            <img
              src="https://agumentik.com/images/resource/agumentik.svg"
              alt=""
            />
          </div>
        </div>

        <h1>What we can do for you</h1>
        <div className="HomeMainCordDiv">
          <div data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
            <img
              src="https://agumentik.com/images/resource/android.svg"
              alt=""
            />
            <h5>Android Development</h5>
            <p>
              Android was intended to be very customizable. And we welcome
              innovations
            </p>
          </div>
          <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
            <img src="https://agumentik.com/images/resource/ios.svg" alt="" />
            <h5>IOS Development</h5>
            <p>
              Programs must be written for people to read and for machines to
              execute.
            </p>
          </div>
          <div data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
            <img
              src="https://www.agumentik.com/images/resource/web_dev.svg"
              alt=""
            />
            <h5>Web Developmentt</h5>
            <p>
              A successful website contains sparkling elements, which attracts
              others.
            </p>
          </div>
          <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
            <img
              src="https://www.agumentik.com/images/resource/graphic_design.svg"
              alt=""
            />
            <h5>Graphic Design</h5>
            <p>
              Three responses to a piece of design yes, no, and WOW! Wow is what
              we aim for.
            </p>
          </div>
        </div>
        <button>Explore More <FaLongArrowAltRight/> </button>

        <div className="HomePageVideoDiv">
          <div className="HomePageVideoImgDiv" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
            <img className="HomeMainVideoImg"
              src="https://www.agumentik.com/images/resource/delivery.svg"
              alt=""
            />
            <img className="ChatImg" src="https://www.agumentik.com/images/icons/chat-icon.png" alt="" />
          </div>
          <div className="HomePageVideoInfoDiv" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200" >
            <h2>We are delivering beautiful digital services to you</h2>
            <p>
              Agumentik have a big vision, taking very small but smart steps to
              get toward success. We are humble, visionary and gigantic as well
              in terms of aspiration. In the Information and Technology
              Industry, “It’s not about a splendid innovation, it’s about a
              bunch of little innovations every day, every month and so on for
              carrying out something a slight better and efficient.
            </p>
          </div>
        </div>
      </div>
      <Portfolio  />
      <T />
      <Partners />
      <Projects />
    </div>
  );
};

export default Home;
