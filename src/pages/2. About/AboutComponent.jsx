import React from "react";
import "./about.css";
import AboutDesktop from "./components/AboutDesktop";
import AboutMobile from "./components/AboutMobile";
import Media from 'react-media';

function AboutComponent(props) {
  return (
    <section ref={props.AboutRef} className="about-component page">
      <Media query={{ maxWidth: 1100 }}>
      <AboutMobile t={props.t}/>
      </Media>
      <Media query={{ minWidth: 1100 }}>
      <AboutDesktop t={props.t}/>
      </Media>
    </section>
  );
}

export default AboutComponent;
