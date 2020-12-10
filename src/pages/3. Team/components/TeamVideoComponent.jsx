import FadeInOnScroll from "../../../components/FadeInOnScroll";
import React, { useState } from "react";
import video from "./video.mp4";
import "./video.css";
import Sensor from "react-visibility-sensor";
import Observer from "react-intersection-observer";

const TeamVideoComponent = () => {
  const [videoInViewport, setVideoInViewport] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const onChangeVideo = (inView) => {
    inView ? setVideoInViewport(!videoInViewport) : setVideoInViewport(videoInViewport);
    inView ? setIsMuted(false) : setIsMuted(true);
  };

  return (
    <FadeInOnScroll>
      <Observer onChange={onChangeVideo}>
        <Sensor>
          <video
            className="video-component"
            id="background-video"
            loop
            autoPlay
            muted={isMuted}
          >
            <source src={video} type="video/mp4" />
            <source src={video} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </Sensor>
      </Observer>
    </FadeInOnScroll>
  );
};

export default TeamVideoComponent;
