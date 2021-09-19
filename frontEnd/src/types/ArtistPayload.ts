import ActionType from "../actionTypes";

export interface SuccessRequest {
  type: ActionType.SEARCH_ARTIST_SUCCESS;
  payload: {
    totalCount: number;
    pageInfo: PageInfo;
    nodes: ArtistNode[];
  };
}

export interface FailedRequest {
  type: ActionType.SEARCH_ARTIST_ERROR;
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
      edges: SongNode[];
    };
  };
}

export interface SongNode {
  id: string;
  mbid: string;
  title: string;
  firstReleaseDate: string;
}

type Action = SuccessRequest | FailedRequest;

export default Action;
