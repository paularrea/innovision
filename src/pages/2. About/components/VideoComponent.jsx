import React from "react";
import YouTube from "react-youtube";
import "./video.css";

const VideoComponent = () => {
  const video = "aLi2GmAyph8";

  return <YouTube className="mx-auto video-component" videoId={video} />;
};

export default VideoComponent;
