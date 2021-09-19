import React, { useEffect, useState } from "react";
import Classes from "../style.module.scss";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

const AlbumItem = ({}) => {
  const dispatch = useDispatch();
  return (
    <div className={Classes.albumItem}>
      <div className={Classes.leftBox}>
        <div className={Classes.albumCoverWrapper}>
          <img
            src="http://coverartarchive.org/release/006391a6-3f99-4d38-9185-50633c43fe38/12259255280.jpg"
            className={Classes.albumCover}
          />
        </div>
      </div>
      <div className={Classes.centerBox}>
        <div className={Classes.albumTitle}>{"Purpose"}</div>
        <div className={Classes.albumInfo}>Type: Album</div>
        <div className={Classes.albumInfo}>Released on: 30th 11 3020</div>
      </div>
      <div className={Classes.rightBox}>
        <div className={Classes.viewBtn}>Songs</div>
      </div>
    </div>
  );
};

export default AlbumItem;
