import axios from "axios"
import * as ActionType from "./constants"

export const actFetchListApi = () => {
  return async dispatch => {
    dispatch(actListMovieRequest())
    try {
      const resp = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07",
        method: "GET"
      })
      dispatch(actListMovieSuccess(resp.data))
    } catch (error) {
      dispatch(actListMovieFail(error))
    }
  }
}

export const actListMovieRequest = () => (
  {
    type: ActionType.LIST_MOVIE_REQUEST
  }
)
export const actListMovieSuccess = (payload) => (
  {
    type: ActionType.LIST_MOVIE_SUCCESS, payload
  }
)
export const actListMovieFail = (payload) => (
  {
    type: ActionType.LIST_MOVIE_FAIL, payload
  }
)