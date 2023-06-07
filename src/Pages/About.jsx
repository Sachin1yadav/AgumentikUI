import React, { useEffect } from "react";
import T from "./T";
import Partners from "./Partners";
import "../Style/About.css";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="ProductsMainDiv" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
        <div className="ProductsInfoDiv">
          <h1>
            We are committed to our customers’ success from start to finish. Our
            input helps make their solutions.
          </h1>
          <p>
            Yes, our mission revolves around our customer and its not only to
            give service to you rather it’s about the higher degree of
            satisfaction. So that it will help you take your business to the
            next level and of course we are seeing the result all around by
            getting customers from all over the country.
          </p>
        </div>
        <div className="ProductsImgDiv">
          <img
            src="https://www.agumentik.com/images/resource/about.svg"
            alt=""
          />
        </div>
      </div>
      <div className="AboutInfoDiv" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1500">
        <h4>What is Agumentik</h4>
        <p>
          We are the fastest growing startup in Andhra Pradesh for designing
          Software, Website Development, App Development, Animation, Game
          Designing and Digital Marketing Era.
        </p>
        <p>
          {" "}
          Agumentik is emerging as a leader for its excellent performance in its
          field and is becoming popular in Andhra Pradesh. Our mission revolves
          around our customer and its not only to give service to you rather
          it’s about the higher satisfaction. So it will help you take your
          business to the next level and we are seeing the result all around by
          getting customers from all over the country
        </p>
      </div>

      <div className="HomePageVideoDiv" >
        <div className="HomePageVideoImgDiv" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
          <img
            src="https://www.agumentik.com/images/resource/vision.svg"
            alt=""
          />
        </div>
        <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1500" className="HomePageVideoInfoDiv">
          <h2>Our Vision</h2>
          <p>
            Agumentik have a big vision, taking very small but smart steps to
            get toward success. We are humble, visionary and gigantic as well in
            terms of aspiration. In the Information and Technology Industry,
            “It’s not about a splendid innovation, it’s about a bunch of little
            innovations every day, every month and so on for carrying out
            something a slight better and efficient.
          </p>
        </div>
      </div>
      <div className="HomePageVideoDiv">
        <div className="HomePageVideoInfoDiv" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
          <h2>Our Mission</h2>
          <p>
            We produce high quality and cost-effective services The company is
            devoted to serving excellence services to our clients. If you demand
            quality and cost-effect services experience, Agumentik is where
            you’ll encounter it. We are a squad of young, energetic and dynamic
            designers and developers, fixated on bringing need-of-the-hour based
            graphic design, app development, website design, game development,
            and digital marketing services.
          </p>
        </div>
        <div className="HomePageVideoImgDiv" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1500">
          <img
            src="https://www.agumentik.com/images/resource/mission.svg"
            alt=""
          />
        </div>
      </div>
      <T />
      <Partners />
    </div>
  );
};

export default About;
