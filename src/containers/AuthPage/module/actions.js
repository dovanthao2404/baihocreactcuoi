import api from "../../../util/ApiUtil";
import * as ActionType from "./constants";

export const actAuthApi = (userLogin, history) => {
  return (dispatch) => {
    dispatch(actAuthRequest());
    api
      .post("/api/QuanLyNguoiDung/DangNhap", userLogin)
      .then((result) => {
        localStorage.setItem("UserAdmin", JSON.stringify(result.data.content));
        if (result.data.content.maLoaiNguoiDung === "KhachHang") {
          return Promise.reject({
            response: { data: { content: "Ban khong co quyen truy cap" } },
          });
        }
        dispatch(actAuthSuccess(result.data.content));
        history.replace("/dashboard");
      })
      .catch((err) => {
        dispatch(actAuthFailed(err));
      });
  };
};

export const actAuthRequest = () => {
  return {
    type: ActionType.AUTH_REQUEST,
  };
};

export const actAuthSuccess = (data) => {
  return {
    type: ActionType.AUTH_SUCCESS,
  };
};

export const actAuthFailed = (data) => {
  return {
    type: ActionType.AUTH_FAIL,
    payload: data,
  };
};
