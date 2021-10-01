import * as ActionType from "./constants";
import api from "../../../../util/ApiUtil";
export const actFetchListApi = () => {
  return async (dispatch) => {
    dispatch(actListMovieRequest());
    try {
      const resp = await api.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
      dispatch(actListMovieSuccess(resp.data.content));
    } catch (error) {
      dispatch(actListMovieFail(error));
    }
  };
};

export const actListMovieRequest = () => ({
  type: ActionType.LIST_MOVIE_REQUEST,
});
export const actListMovieSuccess = (payload) => ({
  type: ActionType.LIST_MOVIE_SUCCESS,
  payload,
});
export const actListMovieFail = (payload) => ({
  type: ActionType.LIST_MOVIE_FAIL,
  payload,
});
