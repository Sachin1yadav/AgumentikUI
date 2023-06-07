import Aos from 'aos';
import React, { useEffect } from 'react'

const Innovation = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
       <div className="ProductsMainDiv" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
        <div className="ProductsInfoDiv">
          <h1>Innovation</h1>
          <p>
          Innovative technology can help turn India's vast potential into reality. Reliable energy. Moving Societies. Future of Manufacturing. Optimizing infrastructure. Sustainable development. Shape the Future.
          </p>
        </div>
        <div className="ProductsImgDiv">
          <img
            src="https://www.agumentik.com/images/resource/innovation.svg"
            alt=""
          />
        </div>
      </div>


       <div className='InnovationMainDiv'>
        <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
          <img src="https://www.agumentik.com/images/resource/agro.jpg" alt="" />
          <h4>Agro Manage</h4>
          <p>Agriculture.</p>
        </div>
        <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
          <img src="https://www.agumentik.com/images/resource/pen.gif" alt="" />
          <h4>Agumen Pen</h4>
          <p>Smart Projector</p>
        </div>
        <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
          <img src="https://www.agumentik.com/images/resource/compiler.png" alt="" />
          <h4>Agumen Compiler</h4>
          <p>Compiler</p>
        </div>
        <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
          <img src="https://www.agumentik.com/images/resource/finger.jpg" alt="" />
          <h4>Agumen Security</h4>
          <p>Transportation Security</p>
        </div>
       </div>



    </div>
  )
}

export default Innovation