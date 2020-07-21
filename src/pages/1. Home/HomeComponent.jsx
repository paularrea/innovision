import React from "react";
import "./home.css";
import FadeInOnScroll from '../../components/FadeInOnScroll'

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
        </div>
      </div>
      <FadeInOnScroll>
      <div className="big-text text-center">
        <h2>
          LOREM IPSUM DOLOR SIT AMET CONSCTETUR ADIPISICING ELIT NULLA
          CONSECTETUR, ALIAS CULPA VITAE MOLLITIA MINUS
        </h2>
      </div>
      </FadeInOnScroll>
    </div>
  );
}

export default HomeComponent;
