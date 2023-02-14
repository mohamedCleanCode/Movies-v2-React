import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/actions/moviesActions";
import MovieCard from "../MovieCard/MovieCard";
import Pagination from "../Pagination/Pagination";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  useEffect(() => {
    setMovies(state.movies);
  }, [state]);
  return (
    <>
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
      <Pagination />
    </>
  );
};

export default MoviesList;
