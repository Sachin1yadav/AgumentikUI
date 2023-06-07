import React, { useEffect } from 'react'
import T from './T'
import Partners from './Partners'
import Aos from 'aos';

const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
       <div className="ProductsMainDiv">
      <div className="ProductsInfoDiv" data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
        <h1>Agumentik Services</h1>
        <p>
        We strive to provide you with the best solutions to the needs of your business system. As a company, we value your obstacles and objectives and develop solutions that best satisfy your demands. We offer your business strong and adequate solutions with lasting impact.

        </p>
      </div>
      <div className="ProductsImgDiv" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
        <img
          src="https://www.agumentik.com/images/resource/ser.svg"
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
          <div data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
            <img
              src="https://www.agumentik.com/images/resource/game_dev.svg"
              alt=""
            />
            <h5>Game Development</h5>
            <p>
            The game gives you a purpose. The feal game is, to find a pourpose
            </p>
          </div>
          <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
            <img src="https://www.agumentik.com/images/resource/software_dev.svg" alt="" />
            <h5>Software Development</h5>
            <p>
            Software always remain softly for End users! But sometimes hardly to developers.
            </p>
          </div>
          <div data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
            <img
              src="https://www.agumentik.com/images/resource/digital.svg"
              alt=""
            />
            <h5>Digital Marketing</h5>
            <p>
            If the content is fire then social media is gasoline and your business growth is our aim.
            </p>
          </div>
          <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
            <img
              src="https://www.agumentik.com/images/resource/ui_ux.svg"
              alt=""
            />
            <h5>UI/UX Design</h5>
            <p>
            UI is the saddle, stirrups, & the reins. UX is the feeling you get being able to ride the horse.
            </p>
          </div>
        </div>
        <div className="ProductsMainDiv">
        <div className="ProductsImgDiv" data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
        <img
          src="https://www.agumentik.com/images/resource/ser.svg"
          alt=""
        />
      </div>
      <div className="ProductsInfoDiv" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
        <h1>We are committed to our customers’ success from start to finish. Our input helps make their solutions.</h1>
        <p>
        Agumentik have a big vision, taking very small but smart steps to get toward success. We are humble, visionary and gigantic as well in terms of aspiration. In the Information and Technology Industry, “It’s not about a splendid innovation, it’s about a bunch of little innovations every day, every month and so on for carrying out something a slight better and efficient.

        </p>
      </div>
     
    </div>
    <T/>
    <Partners/>
    </div>
  )
}

export default Services