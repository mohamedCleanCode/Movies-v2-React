import * as types from "../types/moviesTypes";
const initialState = {
  date: {},
  movies: [],
};
export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_MOVIES:
      return { ...state, movies: [...action.payload], data: action.data };
    default:
      return state;
  }
};
