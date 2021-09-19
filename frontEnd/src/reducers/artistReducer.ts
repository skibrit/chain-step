import ActionType from "../actionTypes";
import Action, { ArtistNode, PageInfo } from "../types/ArtistPayload";
import { setSessionItem, getSessionItem } from "../utils/store";

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

const getInitialState = (): stateInterface => {
  const prevState = getSessionItem("artists");
  if (prevState) {
    return JSON.parse(prevState);
  }
  return initialState;
};

const artistReducer = (
  state: stateInterface = getInitialState(),
  action: Action
): stateInterface => {
  const { type } = action;
  switch (type) {
    case ActionType.SEARCH_ARTIST_SUCCESS: {
      const { payload } = action;
      const newState = {
        resultList: payload.nodes,
        totalCount: payload.totalCount,
        pageInfo: payload.pageInfo,
        isFetching: false,
      };
      setSessionItem("selectedAccordion", "");
      setSessionItem("artists", JSON.stringify(newState));
      return newState;
    }
    case ActionType.GET_MORE_ARTIST_PAYLOAD_SUCCESS: {
      const { payload } = action;
      const newState = {
        resultList: [...state.resultList, ...payload.nodes],
        totalCount: state.totalCount,
        pageInfo: payload.pageInfo,
        isFetching: false,
      };
      setSessionItem("selectedAccordion", "");
      setSessionItem("artists", JSON.stringify(newState));
      return newState;
    }
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
};

export default artistReducer;
