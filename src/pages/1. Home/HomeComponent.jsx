import React from "react";
import "./home.css";
import { Helmet } from "react-helmet";
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
      <div className="intro-text-container">
          <div className="intro-phrase">
            <h2>{props.t("home.text")}</h2>
          </div>
        </div>
      </div>
      {/* <FadeInOnScroll>
        <div className="presentation">
          <div className="big-text text-center intro-text">
            <h2>{props.t("home.text")}</h2>
          </div>
        </div>
      </FadeInOnScroll> */}
    </div>
  );
}

export default HomeComponent;
