import React from "react";
import "./home.css";
import { Helmet } from "react-helmet";
import FadeInOnScroll from "../../components/FadeInOnScroll";
import LandingImg from "./components/LandingImg";
import Fade from "react-reveal/Fade"

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
        <LandingImg />
          <div className="intro-text-container animated fadeInDown">
            <div className="intro-phrase">
              <h1>{props.t("home.text")}</h1>
            </div>
          </div>
      </div>
      <FadeInOnScroll>
        <div className="big-text text-center landing-phrase">
          <h2>{props.t("intro-section.text")}</h2>
        </div>
      </FadeInOnScroll>
    </div>
  );
}

export default HomeComponent;
