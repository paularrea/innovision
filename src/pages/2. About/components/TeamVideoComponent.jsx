import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";
import url from "../../../video/video.mp4";
import "./video.css";
import Sensor from "react-visibility-sensor";
import Observer from "react-intersection-observer";

const TeamVideoComponent = () => {
  const [videoInViewport, setVideoInViewport] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const onChangeVideo = (inView) => {
    inView
      ? setVideoInViewport(!videoInViewport)
      : setVideoInViewport(videoInViewport);
    inView ? setIsMuted(false) : setIsMuted(true);
  };

  return (
      <Observer onChange={onChangeVideo}>
        <Sensor>
          <ReactPlayer
            className="video-component"
            id="background-video"
            url={url}
            loop
            playsinline
            playing
            muted={isMuted}
          />
        </Sensor>
      </Observer>
  );
};

export default TeamVideoComponent;
