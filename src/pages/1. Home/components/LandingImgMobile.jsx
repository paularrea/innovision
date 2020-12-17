import React from "react";
import img from "../../../img/mobileHome.jpg";

const LandingImgMobile = () => {
  return (
    <div>
      <div className='scroll-fixed'><img src={img} className='landing-img zoom' alt="landing"/></div>
    </div>
  );
};

export default LandingImgMobile;
