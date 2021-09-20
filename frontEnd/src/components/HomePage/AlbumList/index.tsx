import React from "react";
import AlbumItem from "./AlbumItem";
import Classes from "./style.module.scss";
import { AlbumNode } from "../../../types/ArtistPayload";

interface ComponentInterface {
  albums: AlbumNode[];
}

const AlbumList: React.FC<ComponentInterface> = ({
  albums,
}: ComponentInterface) => {
  return (
    <div className={Classes.albumListWrapper}>
      {albums.map((item) => {
        return <AlbumItem album={item} key={item.mbid} />;
      })}
    </div>
  );
};

export default AlbumList;
