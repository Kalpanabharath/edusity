import React, { useRef } from "react";
import "./Videoplayer.css";
import video from "../../assets/video.mp4";

const Videoplayer = ({ playState, setplayState }) => {
  const player = useRef(null);
  const closeplayer = (e) => {
    if (e.target === player.current) setplayState(false);
  };
  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closeplayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default Videoplayer;
