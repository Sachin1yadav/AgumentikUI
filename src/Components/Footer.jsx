import React from "react";
import "../Style/Footer.css";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { BsTwitter, BsPinterest } from "react-icons/bs";
import { FaTumblr } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="FooterButton">Get in touch</div>
      <div className="FooterMainDiv">
      
      <div className="FooterInfoDiv">
        <div>
          <h3>Company</h3>
          <p>About Us</p>
          <p>Featuters</p>
          <p>Blog</p>
        </div>
        <div>
          <h3>Services</h3>
          <p>iOS Development</p>
          <p>Andriod Development</p>

          <p>Web Development</p>
        </div>
        <div>
          <h3>Quick Link</h3>
          <p>Home</p>
          <p>Contact Us</p>
          <p>Prodcuts</p>
        </div>
        <div>
          <h3>Games Development</h3>
          <p>2D Game Development</p>
          <p>3D Game Development</p>
        </div>
        <div>
          <h3>Address</h3>
          <p>INNOVATION VALLEY, Hill No:3</p>
          <p>IT-SEZ, Rushikonda,</p>
          <p>Visakhapatnam</p>
          <p>Andhra Pradesh - 530048</p>
          <p>+917406527770</p>
        </div>
      </div>
      <hr />
      <div className="FooterBottomMainDiv">
        <div className="FooterBottomImgDiv">
          <img src="https://www.agumentik.com/images/logo.png" alt="" />
        </div>
        <div className="FooterBottomMTextDiv">
          <p>
            Copyright © 2020 Agumentik software private limited. All Rights
            Reserved.
          </p>
        </div>
        <div className="FooterBottomSocial">
          <p>
            <AiFillFacebook />
          </p>
          <p>
            <BsTwitter />
          </p>
          <p>
            <AiFillInstagram />
          </p>
          <p>
            <FaTumblr />
          </p>
          <p>
            <BsPinterest />
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Footer;
