import FadeInOnScroll from "../../../components/FadeInOnScroll";
import React from "react";
import video from "./video.mp4";
import "./video.css"

const TeamVideoComponent = () => {
  return (
    <FadeInOnScroll>
      <video
        className="video-component"
        id="background-video"
        loop
        autoPlay
        muted
      >
        <source src={video} type="video/mp4" />
        <source src={video} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </FadeInOnScroll>
  );
};

export default TeamVideoComponent;
