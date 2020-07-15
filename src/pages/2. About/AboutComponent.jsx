import React from "react";
import "./about.css";
import AboutDesktop from "./components/AboutDesktop";
import AboutMobile from "./components/AboutMobile";

function AboutComponent(props) {
  return (
    <section ref={props.AboutRef} className="about-component page">
          {window.innerWidth >= 1110 ? (
      <AboutDesktop/>
          ):(
      <AboutMobile/>
          )}
    </section>
  );
}

export default AboutComponent;
