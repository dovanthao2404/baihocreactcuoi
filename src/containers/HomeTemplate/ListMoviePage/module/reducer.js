import * as ActionType from "./constants"

const initialState = {
  listMovie: null,
  error: null,
  isLoading: false,
}

export const listMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LIST_MOVIE_REQUEST:
      state.isLoading = true;
      state.error = null;
      state.listMovie = null;
      return { ...state };

    case ActionType.LIST_MOVIE_SUCCESS:
      state.listMovie = action.payload;
      state.isLoading = false
      state.error = null;
      return { ...state };

    case ActionType.LIST_MOVIE_FAIL:
      state.isLoading = false;
      state.listMovie = null;
      state.error = action.payload;
      return { ...state }

    default:
      return { ...state }
  }
}
