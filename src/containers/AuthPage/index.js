import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router";
import { actAuthApi } from "./module/actions";
import Loading from "../../components/Loading/Loading";
export default function AuthPage(props) {
  // return <Route />;
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector((state) => state.authReducer);

  const [userInfo, setUserInfo] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actAuthApi(userInfo, props.history));
  };

  if (isLoading) {
    return <Loading />;
  }

  const renderNotifi = () => {
    if (error) {
      return (
        <div className="alert alert-primary">
          {error?.response?.data.content}
        </div>
      );
    }
  };

  return (
    <>
      <div className="container">
        <div>{renderNotifi()}</div>
        <form onSubmit={handleSubmit} className="w-50 mx-auto">
          <input
            name="taiKhoan"
            className="form-control"
            type="text"
            onChange={handleOnChange}
          />
          <input
            name="matKhau"
            type="password"
            className="form-control"
            onChange={handleOnChange}
          />
          <button className="btn btn-primary">Dang nhap</button>
        </form>
      </div>
    </>
  );
}
