import { SEARCH_ARTIST } from "../queries";
import { postRequest } from "../utils/api";
import { decodeErrorMessage } from "../utils/error";
import ActionType from "../actionTypes";
import { Dispatch } from "redux";
import Action from "../types/ArtistPayload";

export const searchWork =
  (keyword: string, pageItem: number) => async (dispatch: Dispatch<Action>) => {
    try {
      const result = await postRequest("/graphbrainz", {
        query: SEARCH_ARTIST,
        variables: {
          searchQuery: keyword,
          itemCount: pageItem,
        },
      });
      const data = result.data.data.search.artists;
      dispatch({
        type: ActionType.SEARCH_ARTIST_SUCCESS,
        payload: { ...data },
      });
    } catch (e) {
      dispatch({
        type: ActionType.SEARCH_ARTIST_ERROR,
      });
      console.log(e);
      console.log(decodeErrorMessage(e));
    }
  };
