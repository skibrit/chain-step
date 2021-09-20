import React from "react";
import Classes from "../style.module.scss";
import PlayPauseButton from "../../../Layouts/PlayPauseButton";
import { SongNode } from "../../../../types/ArtistPayload";

interface ComponentProps {
  song: SongNode;
}

const SongItem: React.FC<ComponentProps> = ({ song }) => {
  return (
    <div className={Classes.songItem}>
      <div className={Classes.leftBox}>
        <div className={Classes.btnWrapper}>
          <PlayPauseButton />
        </div>
      </div>
      <div className={Classes.centerBox}>
        <div className={Classes.songTitle}>{song.title}</div>
        <div className={Classes.songInfo}>Type: Song</div>
        <div className={Classes.songInfo}>
          Released on: {song.firstReleaseDate}
        </div>
      </div>
    </div>
  );
};

export default SongItem;
