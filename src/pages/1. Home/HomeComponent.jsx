import React from "react";
import "./home.css";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";

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
        <FadeIn delay={400} transitionDuration={1000}>
          <div className="intro-text-container">
            <div className="intro-phrase">
              <h1>{props.t("home.text")}</h1>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default HomeComponent;
