import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAIL } from "./constants";

const initialState = {
  detailMovie: null,
  isLoading: false,
  error: null,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_REQUEST:
      state.isLoading = true;
      state.detailMovie = null;
      state.error = null;
      return { ...state };
    case AUTH_FAIL:
      state.isLoading = false;
      state.detailMovie = null;
      state.error = payload;
      return { ...state };
    case AUTH_SUCCESS:
      state.isLoading = false;
      state.detailMovie = payload;
      state.error = null;
      return { ...state };

    default:
      return state;
  }
};
