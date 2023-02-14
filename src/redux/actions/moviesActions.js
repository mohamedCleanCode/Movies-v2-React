import * as types from "../types/moviesTypes";

export const getAllMovies = (movies, data) => {
  return {
    type: types.GET_ALL_MOVIES,
    payload: movies,
    data: data,
  };
};

export const fetchMovies = () => {
  return async (dispatch) => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en"
    );
    const data = await res.json();
    dispatch(getAllMovies(data.results, data));
  };
};

export const fetchMoviesBySearch = (word) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=355f3cc55c1a5f8fb6f7b79d7541faea&query=${word}&language=en`
    );
    const data = await res.json();
    dispatch(getAllMovies(data.results, data));
  };
};

export const fetchMoviesByPage = (page) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en&page=${page}`
    );
    const data = await res.json();
    dispatch(getAllMovies(data.results, data));
  };
};
