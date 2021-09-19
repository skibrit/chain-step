import React from "react";
import "./style.scss";
import MusicNote from "../../../../assets/media/icons/music-note.png";

const PageLoader = () => {
  return (
    <div className="full-page-loader">
      <img width="200" src={MusicNote} alt="Site logo" />
    </div>
  );
};

export default PageLoader;
