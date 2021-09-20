import React, { useState } from "react";
import PlayIcon from "../../../assets/media/icons/play-button.png";
import PauseIcon from "../../../assets/media/icons/pause.png";
import Classes from "./style.module.scss";

const PlayPauseButton = () => {
  const [isPlaying, togglePlay] = useState(false);
  const handlePlayPauseClick = () => {
    togglePlay(!isPlaying);
  };
  return (
    <div className={Classes.playPauseWrapper} onClick={handlePlayPauseClick}>
      <div className={Classes.playPauseInnerWrapper}>
        <div className={Classes.button}>
          <img
            src={isPlaying ? PauseIcon : PlayIcon}
            className={Classes.btnIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayPauseButton;
