import React, { useState } from "react";
import Classes from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getMoreArtist } from "../../../actions/task";
import { getSessionItem } from "../../../utils/store";
import { toastr } from "react-redux-toastr";
import { RootState } from "../../../reducers";

const Footer = () => {
  const [isLoading, toggleLoader] = useState(false);
  const pageInfo = useSelector((state: RootState) => state.artist.pageInfo);
  const dispatch = useDispatch();
  const getMoreArtistHandler = async () => {
    try {
      if (isLoading) return;
      const keyword = getSessionItem("keyword");
      if (!keyword) throw new Error("No Search Keyword found");
      toggleLoader(true);
      await dispatch(getMoreArtist(keyword, 5, pageInfo?.endCursor));
      toggleLoader(false);
    } catch (e: any) {
      toggleLoader(false);
      toastr.error("Error", e.toString());
    }
  };
  return (
    <div className={Classes.footerWrapper}>
      {pageInfo && (
        <div className={Classes.loadBtnWrapper}>
          {isLoading ? (
            <div className={Classes.loadMoreBtn}>Processing</div>
          ) : (
            <div className={Classes.loadMoreBtn} onClick={getMoreArtistHandler}>
              Load More
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Footer;
