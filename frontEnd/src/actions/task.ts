import { SEARCH_ARTIST, GET_ALBUM } from "../queries";
import { postRequest } from "../utils/api";
import { decodeErrorMessage } from "../utils/error";
import { showErrorAlert } from "../utils/alert";
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
          after: "",
        },
      });
      const data = result.data.data.search.artists;
      dispatch({
        type: ActionType.SEARCH_ARTIST_SUCCESS,
        payload: { ...data },
      });
    } catch (e: any) {
      dispatch({
        type: ActionType.SEARCH_ARTIST_ERROR,
      });
      showErrorAlert(e.message);
    }
  };

export const getMoreArtist =
  (keyword: string, pageItem: number, after: string | undefined) =>
  async (dispatch: Dispatch<Action>) => {
    try {
      const result = await postRequest("/graphbrainz", {
        query: SEARCH_ARTIST,
        variables: {
          searchQuery: keyword,
          itemCount: pageItem,
          after,
        },
      });
      const data = result.data.data.search.artists;
      dispatch({
        type: ActionType.GET_MORE_ARTIST_PAYLOAD_SUCCESS,
        payload: { ...data },
      });
    } catch (e: any) {
      dispatch({
        type: ActionType.GET_MORE_ARTIST_PAYLOAD_ERROR,
      });
      showErrorAlert(e.message);
    }
  };

export const getAlbum =
  (albumId: string) => async (dispatch: Dispatch<Action>) => {
    try {
      const result = await postRequest("/graphbrainz", {
        query: GET_ALBUM,
        variables: {
          albumId,
        },
      });
      const data = result.data.data.lookup.releaseGroup;
      dispatch({
        type: ActionType.GET_ALBUM_DETAIL_SUCCESS,
        payload: data,
      });
    } catch (e: any) {
      dispatch({
        type: ActionType.GET_ALBUM_DETAIL_FAILED,
      });
      showErrorAlert(e.message);
    }
  };

export const resetAlbumPage = () => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.GET_ALBUM_DETAIL_FAILED,
    payload: null,
  });
};
