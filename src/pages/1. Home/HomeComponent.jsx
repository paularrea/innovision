import React from "react";
import "./home.css";
import FadeInOnScroll from "../../components/FadeInOnScroll";

function HomeComponent(props) {
  return (
    <div ref={props.HomeRef} className="page">
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
