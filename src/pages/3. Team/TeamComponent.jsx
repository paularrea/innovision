import React from "react";
import "./team.css";
import TeamVideoComponent from "./components/TeamVideoComponent";
import TeamList from "./components/TeamList";

function TeamComponent(props) {
  return (
    <div ref={props.TeamRef} className="team-component page">
      <TeamVideoComponent />
      <div className="big-text text-center">
        <h5>WHO WE ARE</h5>
        <h2>
          LOREM IPSUM DOLOR SIT AMET CONSCTETUR ADIPISICING ELIT
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          consectetur, alias culpa vitae mollitia minus possimus fugit libero
          reprehenderit pariatur, explicabo veniam a eligendi quo odit expedita
          distinctio corporis ab?
        </p>
      </div>
      <TeamList className='text-center'/>
      <div className='team-photo'>
          team-photo
          <img  src="" alt=""/>
      </div>
    </div>
  );
}

export default TeamComponent;
