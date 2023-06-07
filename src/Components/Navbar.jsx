import React, { useState } from "react";

import "../Style/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <img
            src="https://www.agumentik.com/images/logo.png"
            alt="logo"
          />
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <Link to='/' onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <li>Home</li>
            </Link>
            <Link to="/services" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <li>Services</li>
            </Link>
            <Link to="/products"  onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <li>Products</li>
            </Link>
            <Link to="/featuers"  onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <li>Features</li>
            </Link>
            <Link to='/about' onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <li>About Us</li>
            </Link>
            <Link to='/career' onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <li>Career</li>
            </Link>
            <Link to="/innovation"  onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <li>Innovation</li>
            </Link>
            <Link to="/contact" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <li>Contact</li>
             </Link>
            <Link to="/blog"  onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <li>Blog</li>
             </Link>
          </ul>
        </div>
        
        <div className="social-media">
          <ul>
            <li></li>
          </ul>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              {showMediaIcons ? <RxCross1 /> : <GiHamburgerMenu />}
            </a>
          </div>  
          </div>
      </nav>
    </>
  );
};

export default Navbar;
