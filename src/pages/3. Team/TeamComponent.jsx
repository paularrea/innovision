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
          <h5>WHO WE ARE</h5>
          <h2>LOREM IPSUM DOLOR SIT AMET CONSCTETUR ADIPISICING ELIT</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            consectetur, alias culpa vitae mollitia minus possimus fugit libero
            reprehenderit pariatur, explicabo veniam a eligendi quo odit
            expedita distinctio corporis ab?
          </p>
        </div>
      </FadeInOnScroll>
      <TeamList className="text-center" />
      <FadeInOnScroll>
        <div className="team-photo-container">
          <div className='team-photo'></div>
        </div>
      </FadeInOnScroll>
    </div>
  );
}

export default TeamComponent;
