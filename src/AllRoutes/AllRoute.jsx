import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Products from "../Pages/Products";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Innovation from "../Pages/Innovation";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";
import Features from "../Pages/Features";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/career" element={<Career />} />
      <Route path="/innovation" element={<Innovation />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/featuers" element={<Features />} />
    </Routes>
  );
};

export default AllRoute;
