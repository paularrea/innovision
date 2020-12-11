import React from "react";
import "./home.css";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";
import FadeInOnScroll from "../../components/FadeInOnScroll";

function HomeComponent(props) {
  return (
    <div ref={props.HomeRef} className="page page-home">
      <Helmet>
        <title>Innovision Medical</title>
        <meta
          name="description"
          content="This is the Innovision Medical home page"
        />
      </Helmet>
      <div className="landing-start">
        <div className="layer">
        </div>
          <FadeIn delay={600} transitionDuration={1200}>
            <div className="intro-text-container">
              <div className="intro-phrase">
                <h1>{props.t("home.text")}</h1>
              </div>
            </div>
          </FadeIn>
      </div>
      <FadeInOnScroll>
        <div className="big-text text-center">
          <h2>{props.t("intro-section.text")}</h2>
        </div>
      </FadeInOnScroll>
    </div>
  );
}

export default HomeComponent;
