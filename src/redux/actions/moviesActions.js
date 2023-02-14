import * as types from "../types/moviesTypes";

export const getAllMovies = (movies) => {
  return {
    type: types.GET_ALL_MOVIES,
    payload: movies,
  };
};

export const fetchMovies = () => {
  return async (dispatch) => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en"
    );
    const data = await res.json();
    dispatch(getAllMovies(data.results));
  };
};
