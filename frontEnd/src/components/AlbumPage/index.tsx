import React, { useEffect, Fragment } from "react";
import Classes from "./style.module.scss";
import FbImageGrid from "../Layouts/FbImageGrid";
import SongList from "./SongList";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { getAlbum, resetAlbumPage } from "../../actions/task";
import PageLoader from "../Layouts/Loader/PageLoader";

const AlbumPage: React.FC = (props: any) => {
  const { match } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const album = useSelector((state: RootState) => state.album.album);

  useEffect(() => {
    if (match?.params?.id) {
      getAlbumDetailHandler(match.params.id);
    }
    return () => {
      dispatch(resetAlbumPage());
    };
  }, []);

  const getAlbumDetailHandler = async (albumId: string) => {
    dispatch(getAlbum(albumId));
  };

  return (
    <Container>
      {album ? (
        <div className={Classes.albumPageWrapper}>
          <div className={Classes.backBtnWrapper}>
            <div
              className={Classes.backBtn}
              onClick={() => {
                history.push("/");
                //window.location.href = "/";
              }}
            >
              Go Back to Home
            </div>
          </div>
          <div className={Classes.albumHeader}>
            <FbImageGrid
              images={[
                album.coverArtArchive.front,
                album.coverArtArchive.back,
                ...album.coverArtArchive.images.map((item) => item.image),
              ]}
            />
          </div>
          <div className={Classes.albumBody}>
            {album.relationships.releaseGroups.edges.length ? (
              <Fragment>
                <h3 className={Classes.albumHeader}>
                  Song List of <span>{album.title}</span>
                </h3>
                <SongList songs={album.relationships.releaseGroups.edges} />
              </Fragment>
            ) : (
              <Fragment>
                <h3 className={Classes.albumHeader}>
                  No Song found on <span>{album.title}</span>
                </h3>
              </Fragment>
            )}
          </div>
        </div>
      ) : (
        <PageLoader />
      )}
    </Container>
  );
};

export default AlbumPage;
