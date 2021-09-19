import React from "react";
import AlbumItem from "./AlbumItem";
import Classes from "./style.module.scss";

const AlbumList = () => {
  return (
    <div className={Classes.albumListWrapper}>
      <AlbumItem />
    </div>
  );
};

export default AlbumList;
