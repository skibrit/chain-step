import React, { useEffect, useState } from "react";
import Classes from "../style.module.scss";
import ImageLoader from "../../../Layouts/Loader/ImageLoader";
import { AlbumNode } from "../../../../types/ArtistPayload";
import { useHistory } from "react-router-dom";

interface ComponentInterface {
  album: AlbumNode;
}

const AlbumItem: React.FC<ComponentInterface> = (props: ComponentInterface) => {
  const history = useHistory();
  const { album } = props;
  return (
    <div className={Classes.albumItem}>
      <div className={Classes.leftBox}>
        <div className={Classes.albumCoverWrapper}>
          <ImageLoader
            src={album.coverArtArchive.front}
            className={Classes.albumCover}
            alt={"image-alt"}
          />
        </div>
      </div>
      <div className={Classes.centerBox}>
        <div className={Classes.albumTitle}>{album.title}</div>
        <div className={Classes.albumInfo}>Type: {album.primaryType}</div>
        <div className={Classes.albumInfo}>
          Released on: {album.firstReleaseDate}
        </div>
      </div>
      <div className={Classes.rightBox}>
        <div
          className={Classes.viewBtn}
          onClick={() => {
            history.push(`/album/${album.mbid}`);
          }}
        >
          Songs
        </div>
      </div>
    </div>
  );
};

export default AlbumItem;
