import ActionType from "../actionTypes";

export interface SuccessArtistRequest {
  type: ActionType.SEARCH_ARTIST_SUCCESS;
  payload: {
    totalCount: number;
    pageInfo: PageInfo;
    nodes: ArtistNode[];
  };
}

export interface SuccessAlbumRequest {
  type: ActionType.GET_ALBUM_DETAIL_SUCCESS;
  payload: AlbumNode;
}

export interface GetMoreArtistPayloadSuccess {
  type: ActionType.GET_MORE_ARTIST_PAYLOAD_SUCCESS;
  payload: {
    pageInfo: PageInfo;
    nodes: ArtistNode[];
  };
}

export interface ArtistRequestFailed {
  type: ActionType.SEARCH_ARTIST_ERROR;
}

export interface AlbumRequestFailed {
  type: ActionType.GET_ALBUM_DETAIL_FAILED;
}

export interface GetMoreArtistPayloadFailed {
  type: ActionType.GET_MORE_ARTIST_PAYLOAD_ERROR;
}

export interface PageInfo {
  endCursor: string;
}

export interface ArtistNode {
  id: string;
  mbid: string;
  name: string;
  country: string;
  type: string;
  releaseGroups: {
    nodes: AlbumNode[];
  };
}

export interface AlbumNode {
  id: string;
  mbid: string;
  title: string;
  primaryType: string;
  firstReleaseDate: string;
  coverArtArchive: {
    front: string | null;
    back: string | null;
    images: [
      {
        image: string;
      }
    ];
  };
  relationships: {
    releaseGroups: {
      edges: SongNodeEdge[];
    };
  };
}

export interface SongNodeEdge {
  node: {
    target: SongNode;
  };
}

export interface SongNode {
  id: string;
  mbid: string;
  title: string;
  firstReleaseDate: string;
}

type Action =
  | SuccessArtistRequest
  | SuccessAlbumRequest
  | AlbumRequestFailed
  | ArtistRequestFailed
  | GetMoreArtistPayloadSuccess
  | GetMoreArtistPayloadFailed;

export default Action;
