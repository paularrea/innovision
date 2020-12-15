import React from "react";
import "./home.css";
import { Helmet } from "react-helmet";
import Media from 'react-media';
import FadeInOnScroll from "../../components/FadeInOnScroll";
import LandingImg from "./components/LandingImg";
import LandingImgMobile from "./components/LandingImgMobile";

function HomeComponent(props) {
  return (
    <div ref={props.HomeRef} className="page-home">
      <Helmet>
        <title>Innovision Medical</title>
        <meta
          name="description"
          content="This is the Innovision Medical home page"
        />n
      </Helmet>
      <div className="landing-start">
      <Media query={{ minWidth: 700 }}>
        <LandingImg />
      </Media>
      <Media query={{ maxWidth: 699 }}>
        <LandingImgMobile />
      </Media>
          <div className="intro-text-container animated fadeInDown">
            <div className="intro-phrase">
              <h1>{props.t("home.text")}</h1>
            </div>
          </div>
      </div>
      <div className="separator"></div>
        <div className="big-text text-center landing-phrase">
        <h5>{props.t("intro-section.title")}</h5>
          <h2>{props.t("intro-section.text")}</h2>
        </div>
      <div className="separator"></div>
    </div>
  );
}

export default HomeComponent;
