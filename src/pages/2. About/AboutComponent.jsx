import React from "react";
import "./about.css";
import AboutDesktop from "./components/AboutDesktop";
import AboutMobile from "./components/AboutMobile";
import Media from 'react-media';
import { Helmet } from "react-helmet";
import TeamVideoComponent from "./components/TeamVideoComponent";


function AboutComponent(props) {
  return (
    <section ref={props.AboutRef} className="about-component page">
      <Helmet>
        <title>Innovision Medical</title>
        <meta name="description" content="This is the Innovision Medical about page" />
      </Helmet>
           <Media query={{ maxWidth: 1200 }}>
      <AboutMobile t={props.t}/>
      </Media>
      <Media query={{ minWidth: 1200 }}>
      <AboutDesktop t={props.t}/>
      </Media>
      <div className="separator"></div>
      <div className='video-container'>
        <TeamVideoComponent/>
      </div>
    </section>
  );
}

export default AboutComponent;
