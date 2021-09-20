import ActionType from "../actionTypes";
import Action, { AlbumNode } from "../types/ArtistPayload";

interface stateInterface {
  album: AlbumNode | null;
  isFetching: boolean;
}

const initialState = {
  album: null,
  isFetching: true,
};

const albumReducer = (
  state: stateInterface = initialState,
  action: Action
): stateInterface => {
  const { type } = action;
  switch (type) {
    case ActionType.GET_ALBUM_DETAIL_SUCCESS:
      const { payload } = action;
      return {
        album: payload,
        isFetching: false,
      };
    case ActionType.GET_ALBUM_DETAIL_FAILED:
      return {
        album: null,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default albumReducer;
