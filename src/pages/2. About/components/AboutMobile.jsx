import React from "react";
import FadeInOnScroll from "../../../components/FadeInOnScroll";

function AboutDesktop(props) {
  return (
    <>
      <FadeInOnScroll>
        <div className="row about-photos-text-container">
          <div className="col-12 about-photos about1 w-50">
          </div>
          <div className="about-text col-12">
            <div className="about-text-wrapper">
              <h2>{props.t("about.1")}</h2>
              <p>{props.t("about.description1")}</p>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <div className="row about-photos-text-container">
          <div className="col-12 about-photos about2 w-50">
          </div>
          <div className=" about-text col-12">
            <div className="about-text-wrapper">
            <h2>{props.t("about.2")}</h2>
              <p>{props.t("about.description2")}</p>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <div className="row about-photos-text-container">
          <div className="col-12 about-photos about3 w-50">
          </div>
          <div className="about-text col-12">
            <div className="about-text-wrapper">
            <h2>{props.t("about.3")}</h2>
              <p>{props.t("about.description3")}</p>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <div className="row about-photos-text-container">
          <div className="col-12 about-photos about4">
          </div>
          <div className="about-text col-12">
            <div className="about-text-wrapper">
            <h2>{props.t("about.4")}</h2>
              <p>{props.t("about.description4")}</p>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </>
  );
}

export default AboutDesktop;
