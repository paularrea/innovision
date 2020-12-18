import React from "react";
import "./team.css";
import TeamList from "./components/TeamList";
import { Helmet } from "react-helmet";
import teamPhoto from "../../img/team-members/team.jpeg";
import FadeInOnScroll from "../../components/FadeInOnScroll";

function TeamComponent(props) {
  return (
    <div ref={props.TeamRef} className="team-component page">
      <Helmet>
        <title>Innovision Medical</title>
        <meta
          name="description"
          content="This is the Innovision Medical Team page"
        />
      </Helmet>
      <div className="big-text text-center">
        <FadeInOnScroll>
          <h5>{props.t("team.title1")}</h5>
          <h2>{props.t("team.title2")}</h2>
          <p>{props.t("team.text")}</p>
        </FadeInOnScroll>
      </div>
      <TeamList t={props.t} className="text-center" />
      <div className="team-photo-container">
        <img className="team-photo" src={teamPhoto} alt="team" />
      </div>
    </div>
  );
}

export default TeamComponent;
