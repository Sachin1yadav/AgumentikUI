import React, { useEffect } from "react";
import "../Style/Blog.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Blog = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="ProductsMainDiv" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
        <div className="ProductsInfoDiv">
          <h1>Agumentik Blog</h1>
          <p>
            Welcome to our blog where we keep you updated about our Company and
            our services.
          </p>
        </div>
        <div className="ProductsImgDiv">
          <img
            src="https://www.agumentik.com/images/resource/blog.svg"
            alt=""
          />
        </div>
      </div>
      <div className="BlogMainDiv" >
        <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
          <img
            src="https://www.agumentik.com/images/resource/home_blog.png"
            alt=""
          />
          <h3>Introducing Agumentik Software Private Limited</h3>
          <p>
            Agumentik has quickly become a fast-growing, dynamic company in the
            management of customer information technology solutions in Andhra
            Pradesh and proved to be one of the market leaders.
          </p>
          <p>
            Established in 2016, we quickly expanded our operations to many
            other locations. Too few of them are Visakhapatnam, Goa Surampalem,
            and many others.
          </p>
          <p>
            We strive to provide you with the best solutions to the needs of
            your business system. As a company, we value your problems and goals
            and develop solutions that best meet your needs. We offer your
            business strong and effective solutions with lasting impact. We see
            ourselves as your long-term partner.
          </p>
          <p>
            At Agumentik software private limited, we have a quality-conscious
            staff of consultants, graphic designers, developers, programmers and
            digital marketing teams who have the capabilities and experience to
            create high-performance solutions that meet your needs. We are
            confident that you will be satisfied with our quality services which
            are as under.
          </p>
        </div>
        <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
          <img
            src="https://www.agumentik.com/images/resource/website.jpg"
            alt=""
          />
          <h3>WEBSITE DESIGNING</h3>
          <p>
            We love creativity and design with the passion of building epic web
            experiences to blow people’s minds and don’t let them jump from your
            pocket.
          </p>{" "}
        </div>
        <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
          <img src="https://www.agumentik.com/images/resource/app.jpg" alt="" />
          <h3>APP DEVELOPMENT</h3>
          <p>
            The application is considered the best which has abilities to
            attract the user and we are here to help you in that which further
            help your customer and you as well.
          </p>{" "}
        </div >
        <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
          <img
            src="https://www.agumentik.com/images/resource/software.jpg"
            alt=""
          />
          <h3>SOFTWARE DESIGNING</h3>
          <p>
            Our software is designed keeping your future needs in mind so that
            you can add the next features in your business and move to another
            grand level.
          </p>{" "}
        </div>
        <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
          <img
            src="https://www.agumentik.com/images/resource/game.jpg"
            alt=""
          />
          <h3>GAME DEVELOPMENT</h3>
          <p>
            Getting irritated from customer’s complain related to device
            compatibility of the game, worry not !! it’s our duty to make you
            and your customers happy.
          </p>
        </div>
        <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
          <img
            src="https://www.agumentik.com/images/resource/graphic.jpg"
            alt=""
          />
          <h3>GRAPHIC DESIGNINGT</h3>
          <p>
            The design creates culture. Culture shapes values. Values determine
            the future and we are the best in bringing your virtual design to
            the real world which helps you reach numerous customers.
          </p>
        </div>
        <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
          <img
            src="https://www.agumentik.com/images/resource/digital.jpg"
            alt=""
          />
          <h3>DIGITAL MARKETING</h3>
          <p>
            We want to know what consumers are looking for, what their values
            are, and how can we meet their needs.it’s not just about Big Data;
            it’s about translating that into the truth and growing your
            business.
          </p>
          <p>
            We aim to give the best services to take you to the next level of
            business by helping you in completing your work quickly and with
            greater perfection, you can ever imagine. so we invite you
            especially to become part of the brand’s movement. We are getting
            popular and being recognized among the people for our team’s hard
            work, sincerity, zero complaint ratio, and most important value for
            the time which matters a lot to you. Get your work done on your
            fingertips, you are just a call far from us.
          </p>
        </div>
       

           



      </div>



 


    </div>
  );
};

export default Blog;
