import React, { useEffect } from 'react'
import "../Style/Partner.css"
import Aos from 'aos';
const Partners = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className='PartnerDiv' data-aos="fade-up"
    data-aos-anchor-placement="center-bottom"
    data-aos-duration="1200" >
        <h1>Out partners</h1>
        <p>Indicators offline to maximise the long tail. Keeping your eye on the ball</p>
    </div>
  )
}

export default Partners