import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesByPage } from "../../redux/actions/moviesActions";

const Pagination = () => {
  const { data } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlePageClick = (e) => {
    dispatch(fetchMoviesByPage(e.selected + 1));
  };
  return (
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
  );
};

export default Pagination;
