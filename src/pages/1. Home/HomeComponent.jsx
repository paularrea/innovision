import React from "react";
import "./home.css";
import { Helmet } from "react-helmet";
import FadeInOnScroll from "../../components/FadeInOnScroll";

function HomeComponent(props) {
  return (
    <div ref={props.HomeRef} className="page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Innovision Medical</title>
        <meta name="description" content="Helmet app" />
      </Helmet>
      <div className="landing-start">
        <div className="landing-start-content">
          <h2>{props.t("home.title")}</h2>
          <p>{props.t("home.description")}</p>
        </div>
      </div>
      <FadeInOnScroll>
        <div className="big-text text-center">
          <h2>{props.t("home.text")}</h2>
        </div>
      </FadeInOnScroll>
    </div>
  );
}

export default HomeComponent;
