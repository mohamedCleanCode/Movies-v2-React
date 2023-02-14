import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  const getMovie = async (id) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=52ef927bbeb21980cd91386a29403c78&language=en`
    );
    const data = await res.json();
    console.log(data);
    setMovie(data);
  };

  useEffect(() => {
    getMovie(id);
  }, []);
  return (
    <div className="movie-details">
      {movie ? (
        <>
          <div className="info">
            <div className="image">
              <img
                src={`${"https://image.tmdb.org/t/p/w500/"}${
                  movie.poster_path
                }`}
                alt={movie?.title}
              />
            </div>
            <div className="movie-text">
              <p className="movie-title">
                Movie Name : <span>{movie?.title}</span>
              </p>
              <p className="movie-release">
                Movie release: <span>{movie.release_date}</span>
              </p>
              <p className="movie-vote-count">
                Movie Counter <span>{movie.vote_count}</span>
              </p>
              <p className="vote-average">
                Vote Average <span>{movie.vote_average}</span>
              </p>
            </div>
          </div>
          <div className="movie-story mt-3">
            <span>Story:</span>
            <p className="story">{movie.overview}</p>
          </div>
        </>
      ) : (
        <h1>ther is not a movie right now...!</h1>
      )}
    </div>
  );
};

export default MovieDetails;
