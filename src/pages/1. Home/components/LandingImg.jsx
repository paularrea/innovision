import React from "react";
import img from "../../../img/home.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LandingImg = () => {
  return (
    <div>
      <LazyLoadImage effect="blur" src={img} alt="landing" />
    </div>
  );
};

export default LandingImg;
