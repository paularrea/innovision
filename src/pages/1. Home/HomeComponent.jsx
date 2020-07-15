import React from "react";
import "./home.css";

function HomeComponent(props) {
  return (
    <div ref={props.HomeRef} className="page">
      <div className="landing-start">
        <div className="landing-start-content">
          <h2> LOREM IPSUM DOROR, </h2>
          <h2>SIT AMET CONSECTETUR</h2>
          <p>
            Saepe ad fuga repellat vitae praesentium repellendus, veniam
            facilis, quibusdam temporibus, inventore sunt assumenda maiores
            deleniti expedita excepturi alias quia fugiat ratione?
          </p>
          <button className="btn-home">Let's start</button>
        </div>
      </div>
      <div className="big-text text-center">
        <h2>
          LOREM IPSUM DOLOR SIT AMET CONSCTETUR ADIPISICING ELIT NULLA
          CONSECTETUR, ALIAS CULPA VITAE MOLLITIA MINUS
        </h2>
      </div>
    </div>
  );
}

export default HomeComponent;
