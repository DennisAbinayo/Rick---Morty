import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";

function Pagination({ pageNumber, setPageNumber, info }) {
  return (
    <ReactPaginate
      pageCount={info?.pages}
      className="pagination justify-center gap-4 my-4"
      activeClassName="active"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      nextLabel="Next "
      previousLabel="Prev"
      onPageChange={(e) => {
        setPageNumber(e.selected + 1);
      }}
      pageLinkClassName="page-link "
      pageClassName="page-item "
    />
  );
}

Pagination.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  setPageNumber: PropTypes.func.isRequired,
  info: PropTypes.shape({
    pages: PropTypes.number,
  }).isRequired,
};

export default Pagination;
