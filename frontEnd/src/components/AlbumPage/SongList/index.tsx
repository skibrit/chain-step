import React from "react";
import Classes from "./style.module.scss";
import SongItem from "./SongItem";
import { SongNodeEdge } from "../../../types/ArtistPayload";

interface ComponentProps {
  songs: SongNodeEdge[];
}

const SongList: React.FC<ComponentProps> = ({ songs }) => {
  return (
    <div className={Classes.songListWrapper}>
      {songs.map((item) => {
        const sng = item.node.target;
        return <SongItem key={sng.mbid} song={sng} />;
      })}
    </div>
  );
};

export default SongList;
