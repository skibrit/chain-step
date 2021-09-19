import React, { useEffect, Fragment } from "react";
import Classes from "./style.module.scss";
import FbImageGrid from "../Layouts/FbImageGrid";
import SongList from "./SongList";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { getAlbum } from "../../actions/task";

const AlbumPage: React.FC = (props: any) => {
  const { match } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const album = useSelector((state: RootState) => state.album.album);

  useEffect(() => {
    if (match?.params?.id) {
      getAlbumDetailHandler(match.params.id);
    }
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
                // history.push("/");
                window.location.href = "/";
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
                /*  "https://wallpaperaccess.com/full/1622642.jpg",
                "https://images.unsplash.com/photo-1562155847-c05f7386b204?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
                "https://i.pinimg.com/originals/86/9d/98/869d9814541e62ccb9439ed24d59b355.jpg",*/
              ]}
            />
          </div>
          <div className={Classes.albumBody}>
            {album.relationships.releaseGroups.edges.length ? (
              <Fragment>
                <h3 className={Classes.albumHeader}>
                  Song List of {album.title}
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
        <div>Fetching Data</div>
      )}
    </Container>
  );
};

export default AlbumPage;
