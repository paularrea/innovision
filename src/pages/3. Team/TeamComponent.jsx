import React from "react";
import "./team.css";
import TeamVideoComponent from "./components/TeamVideoComponent";
import TeamList from "./components/TeamList";
import FadeInOnScroll from "../../components/FadeInOnScroll";

function TeamComponent(props) {
  return (
    <div ref={props.TeamRef} className="team-component page">
      <TeamVideoComponent />
      <FadeInOnScroll>
        <div className="big-text text-center">
          <h5>{props.t("team.title1")}</h5>
          <h2>{props.t("team.title2")}</h2>
          <p>
          {props.t("team.text")}
          </p>
        </div>
      </FadeInOnScroll>
      <TeamList t={props.t} className="text-center" />
      <FadeInOnScroll>
        <div className="team-photo-container">
          <div className='team-photo'></div>
        </div>
      </FadeInOnScroll>
    </div>
  );
}

export default TeamComponent;
