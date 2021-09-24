import { combineReducers } from "redux";
import { listMovieReducer } from "../../containers/HomeTemplate/ListMoviePage/module/reducer";
import { detailMovieReducer } from "../../containers/HomeTemplate/DetailMoviePage/module/reducer"
export const rootReducer = combineReducers({
  listMovieReducer,
  detailMovieReducer
})