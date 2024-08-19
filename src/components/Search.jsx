import PropTypes from "prop-types";

function Search({ setName, setPageNumber }) {
  function filterByName(event) {
    setPageNumber(1);
    setName(event.target.value);
  }

  return (
    <form className="flex justify-center gap-4 mb-10">
      <input
        onChange={filterByName}
        type="text"
        placeholder="Search Characters by Name"
        className="border border-red-500 w-80 rounded-md shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3 "
      />
      <button
        onClick={(event) => event.preventDefault()}
        className="btn btn-primary"
      >
        Search
      </button>
    </form>
  );
}

Search.propTypes = {
  setName: PropTypes.func.isRequired,
  setPageNumber: PropTypes.func.isRequired,
};

export default Search;
