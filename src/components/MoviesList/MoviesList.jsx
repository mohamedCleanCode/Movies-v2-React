import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/actions/movies-actions";
import MovieCard from "../MovieCard/MovieCard";

const MoviesList = () => {
  const movies = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
    console.log(movies);
  }, []);
  return (
    <Row className="movies-list text-center">
      {movies.length >= 1 ? (
        movies.map((movie) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3} key={movie.id} className="mb-3">
              <MovieCard movie={movie} />
            </Col>
          );
        })
      ) : (
        <h1>There are not movies to shown...!</h1>
      )}
    </Row>
  );
};

export default MoviesList;
