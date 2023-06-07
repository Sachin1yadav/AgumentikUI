import React, { useEffect } from 'react'
import "../Style/Products.css";
import { AiFillFacebook } from 'react-icons/ai';
import Aos from 'aos';

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
    <div className="ProductsMainDiv"  >
       <div className="ProductsInfoDiv" data-aos="fade-down"
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
      <div className="ProductsImgDiv" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
        <img
          src="https://www.agumentik.com/images/resource/contact.svg"
          alt=""
        />
      </div>
    </div>


    <div className='contactMainDiv'>
      <div className='MapMainDiv' data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
      <iframe
  src="https://www.google.com/maps/d/embed?mid=1q2Hs9ZdBHrptUd2U6b_n9wfej13jdER3&ehbc=2E312F"
  width="100%"
  height="100%"
  style={{ border: "0" }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
      </div>
      <div className='ContactFormDiv' data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
     <h4>Leave A Message</h4>
     <p>Your email address will not be published. Required fields are marked *</p>
       <div className='FormNameEmailDiv'>
       
        <input type="text" placeholder='Name*' />
        
        <input type="email" placeholder='Email*' />
       </div>
       
        <input type="Number"  placeholder='Phone Number*'/>
    
        <input type="text"  placeholder='Subject'/>
         <textarea name=""  placeholder='Type Your Message' id="" cols="30" rows="10"></textarea>
        <button className='SendNow'>Send Now</button>
      </div>
    </div>


    <div className='ContackTestimonialsDiv'>
      <div>
        <h3>Vishakhapatnam</h3>
        <p>INNOVATIONS VALLEY,Hill No :3,</p>
        <p>IT-SEZ, Rushikonda, Visakhapatnam,</p>
        <p>Andhra Pradesh - 530048</p>
        <p>+91-7406527770</p>
        <hr />
        {/* <div className='ContactSocailMainDiv'>
          <div>
            <h6>
            <AiFillFacebook />
          </h6>
          </div>
          <div>
            <h6>
            <AiFillFacebook />
          </h6>
          </div>
          <div>
            <h6>
            <AiFillFacebook />
          </h6>
          </div>
          <div>
            <h6>
            <AiFillFacebook />
          </h6>
          </div>
          <div>
            <h6>
            <AiFillFacebook />
          </h6>
          </div>
        </div> */}
      </div>
      <div>
        <h3>Vishakhapatnam</h3>
        <p>INNOVATIONS VALLEY,Hill No :3,</p>
        <p>IT-SEZ, Rushikonda, Visakhapatnam,</p>
        <p>Andhra Pradesh - 530048</p>
        <p>+91-7406527770</p>
        <hr />
      </div>
      <div>
        <h3>Vishakhapatnam</h3>
        <p>INNOVATIONS VALLEY,Hill No :3,</p>
        <p>IT-SEZ, Rushikonda, Visakhapatnam,</p>
        <p>Andhra Pradesh - 530048</p>
        <p>+91-7406527770</p>
        <hr />
      </div>
    </div>
    </div>
  )
}

export default Contact