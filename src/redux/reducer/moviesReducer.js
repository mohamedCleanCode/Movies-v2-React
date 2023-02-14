import * as types from "../types/moviesTypes";

export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case types.GET_ALL_MOVIES:
      return [...action.payload];
    default:
      return state;
  }
};
