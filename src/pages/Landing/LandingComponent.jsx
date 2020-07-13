import React from "react";
import "./landing.css";

function LandingComponent() {
  return (
    <div className="page">
      <div className="landing-start">
        <div className='landing-start-content'>
          <h2> LOREM IPSUM DOROR, </h2>
          <h2>SIT AMET CONSECTETUR</h2>
          <p>
            Saepe ad fuga repellat vitae praesentium repellendus, veniam
            facilis, quibusdam temporibus, inventore sunt assumenda maiores
            deleniti expedita excepturi alias quia fugiat ratione?
          </p>
          <button className='btn-landing'>
              Let's start
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingComponent;
