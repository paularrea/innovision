import React from "react";
import FadeInOnScroll from "../../../components/FadeInOnScroll";

function AboutDesktop(props) {
  return (
    <>
      <FadeInOnScroll>
        <div className="row about-photos-text-container">
          <div className="col-12 col-md-6 about-photos about1 w-50">
          </div>
          <div className="col-12 col-md-6">
            <div className="about-text-wrapper-left">
            <h5>{props.t("about.title1")}</h5>
              <h2>{props.t("about.1")}</h2>
              <p>{props.t("about.description1")}</p>
            </div>
          </div>
        </div>
        <div className="row about-photos-text-container">
          <div className="col-12 col-md-6">
            <div className="about-text-wrapper-right">
            <h5>{props.t("about.title2")}</h5>
              <h2>{props.t("about.2")}</h2>
              <p>{props.t("about.description2")}</p>
            </div>
          </div>
          <div  className="col-12 col-md-6 about-photos about2 w-50">
          </div>
        </div>
        <div className="row about-photos-text-container">
          <div className="col-12 col-md-6 about-photos about3 w-50">
          </div>
          <div  className="col-12 col-md-6">
            <div className="about-text-wrapper-left">
            <h5>{props.t("about.title3")}</h5>
              <h2>{props.t("about.3")}</h2>
              <p>{props.t("about.description3")}</p>
            </div>
          </div>
        </div>
        <div className="row about-photos-text-container">
          <div className="col-12 col-md-6">
            <div className="about-text-wrapper-right">
            <h5>{props.t("about.title4")}</h5>
              <h2>{props.t("about.4")}</h2>
              <p>{props.t("about.description4")}</p>
            </div>
          </div>
          <div  className="col-12 col-md-6 about-photos about4 w-50">
          </div>
        </div>
      </FadeInOnScroll>
    </>
  );
}

export default AboutDesktop;
