import ActionType from "../actionTypes";
import Action, { ArtistNode, PageInfo } from "../types/ArtistPayload";

interface stateInterface {
  resultList: ArtistNode[];
  totalCount: number;
  pageInfo?: PageInfo | null;
  isFetching: boolean;
}

const initialState = {
  resultList: [],
  totalCount: 0,
  isFetching: true,
};

export default function workReducer(
  state: stateInterface = initialState,
  action: Action
) {
  const { type } = action;
  switch (type) {
    case ActionType.SEARCH_ARTIST_SUCCESS:
      const { payload } = action;
      return {
        resultList: payload.nodes,
        totalCount: payload.totalCount,
        pageInfo: payload.pageInfo,
        isFetching: false,
      };
    case ActionType.SEARCH_ARTIST_ERROR:
      return {
        resultList: [],
        totalCount: 0,
        pageInfo: null,
        isFetching: false,
      };
    default:
      return state;
  }
}
