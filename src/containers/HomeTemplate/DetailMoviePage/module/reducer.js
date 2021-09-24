import { DETAIL_MOVIE_FAIL, DETAIL_MOVIE_REQUEST, DETAIL_MOVIE_SUCCESS } from "./constants"

const initialState = {
  detailMovie: null,
  isLoading: false,
  error: null
}

export const detailMovieReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case DETAIL_MOVIE_REQUEST:
      state.isLoading = true
      state.detailMovie = null;
      state.error = null
      return { ...state }
    case DETAIL_MOVIE_FAIL:

      state.isLoading = false
      state.detailMovie = null;
      state.error = payload
      return { ...state }
    case DETAIL_MOVIE_SUCCESS:


      state.isLoading = false
      state.detailMovie = payload;
      state.error = null
      return { ...state }


    default:
      return state
  }
}
