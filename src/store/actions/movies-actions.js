export const getMovies = (movies) => {
  return {
    type: "GET_MOVIES",
    payload: movies,
  };
};

export const fetchMovies = () => {
  return async (dispatch) => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en"
    );
    const data = await res.json();
    dispatch(getMovies(data.results));
  };
};
