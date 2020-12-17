import React from "react";
import img from "../../../img/home.jpg";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

const LandingImg = () => {
  return (
    <div>
      {/* <LazyLoadImage effect="blur" className='landing-img' src={img} alt="landing" /> */}
      <div className='scroll-fixed'><img src={img} className='landing-img zoom' alt="landing"/></div>
    </div>
  );
};

export default LandingImg;
