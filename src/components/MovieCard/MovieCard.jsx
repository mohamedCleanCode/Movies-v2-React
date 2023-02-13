import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card position-relative rounded">
      <img
        className="rounded w-100 h-100"
        style={{
          objectFit: "cover",
          cursor: "pointer",
        }}
        src={`${"https://image.tmdb.org/t/p/w500/"}${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-card-overlay">
        <p className="movie-name">
          Name: <span>{movie.title}</span>
        </p>
        <p className="movie-release">
          Release Date: <span>{movie.release_date}</span>
        </p>
        <p className="movie-vote-count">
          Vote Count: <span>{movie.vote_count}</span>
        </p>
        <p className="movie-vote-avverage">
          Vote Average: <span>{movie.vote_average}</span>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
