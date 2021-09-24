import axios from "axios";
import { DETAIL_MOVIE_FAIL, DETAIL_MOVIE_REQUEST, DETAIL_MOVIE_SUCCESS } from "./constants";


export const fetchDetailMovie = (id) => {
  return dispatch => {
    dispatch(atcDetailRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      method: "GET"
    }).then((res) => {
      dispatch(atcDetailSuccess(res.data))
    }).catch(error => {
      dispatch(atcDetailSuccess(error))

    })
  }
}

export const atcDetailRequest = () => ({
  type: DETAIL_MOVIE_REQUEST,
})

export const atcDetailSuccess = (payload) => ({
  type: DETAIL_MOVIE_SUCCESS,
  payload
})
export const atcDetailFail = (payload) => ({
  type: DETAIL_MOVIE_FAIL,
  payload
})