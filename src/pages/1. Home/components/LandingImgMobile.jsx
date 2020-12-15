import React from "react";
import img from "../../../img/mobileHome.jpg";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

const LandingImg = () => {
  return (
    <div>
      {/* <LazyLoadImage effect="blur" className='landing-img' src={img} alt="landing" /> */}
      <img src={img} className='landing-img' alt="landing"/>
    </div>
  );
};

export default LandingImg;