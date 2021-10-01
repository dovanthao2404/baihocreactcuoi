import { combineReducers } from "redux";
import { listMovieReducer } from "../../containers/HomeTemplate/ListMoviePage/module/reducer";
import { detailMovieReducer } from "../../containers/HomeTemplate/DetailMoviePage/module/reducer";
import { authReducer } from "../../containers/AuthPage/module/reducer";

export const rootReducer = combineReducers({
  listMovieReducer,
  detailMovieReducer,
  authReducer,
});
