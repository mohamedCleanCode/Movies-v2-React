import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  fetchMoviesByPage,
} from "../../redux/actions/moviesActions";
import MovieCard from "../MovieCard/MovieCard";

const MoviesList = () => {
  const { movies, data } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlePageClick = (e) => {
    console.log(`User requested page number ${e.selected + 1} `);
    dispatch(fetchMoviesByPage(e.selected + 1));
  };

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

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
      <ReactPaginate
        className="pagination justify-content-center"
        pageClassName="page-item"
        breakClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        activeClassName="active"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={data?.total_pages}
        previousLabel="< previous"
      />
    </>
  );
};

export default MoviesList;
