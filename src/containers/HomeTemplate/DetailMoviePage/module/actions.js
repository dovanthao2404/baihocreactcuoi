import axios from "axios";
import api from "../../../../util/ApiUtil";

import {
  DETAIL_MOVIE_FAIL,
  DETAIL_MOVIE_REQUEST,
  DETAIL_MOVIE_SUCCESS,
} from "./constants";

export const fetchDetailMovie = (id) => {
  return (dispatch) => {
    dispatch(atcDetailRequest());
    api
      .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
      .then((res) => {
        dispatch(atcDetailSuccess(res.data.content));
      })
      .catch((error) => {
        dispatch(atcDetailSuccess(error));
      });
  };
};

export const atcDetailRequest = () => ({
  type: DETAIL_MOVIE_REQUEST,
});

export const atcDetailSuccess = (payload) => ({
  type: DETAIL_MOVIE_SUCCESS,
  payload,
});
export const atcDetailFail = (payload) => ({
  type: DETAIL_MOVIE_FAIL,
  payload,
});
