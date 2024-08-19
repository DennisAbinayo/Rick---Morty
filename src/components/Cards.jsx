import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Cards({ results, deleteCharacter }) {
  console.log(results);

  let display;

  if (results) {
    display = results.map((result) => (
      <div
        key={result.id}
        className="col-2  my-10 mx-4 border border-black relative rounded px-0"
      >
        <div className="">
          <Link to={`/character/${result.id}`}>
            <img
              src={result.image}
              alt={`${result.name}`}
              className="pl-0 pr-0 rounded-t cursor-pointer"
            />
          </Link>
          <div className="content grid gap-2 px-4 pt-2">
            <div className="text-xl font-medium ">{result.name}</div>
            <div className="">
              <div className="">Location</div>
              <div className="mb-2">{result.location.name}</div>
            </div>
          </div>
          <div className="px-4">
            <button
              className="py-2 mt-2 mb-2 bg-red-400 text-orange-950 rounded-full text-sm text-bold hover:text-white w-fit cursor-pointer px-4"
              onClick={() => deleteCharacter(result.id)}
            >
              Delete
            </button>
          </div>
        </div>

        {(() => {
          if (result.status === "Dead") {
            return (
              <div className="absolute top-1 right-5">
                <span
                  className={`inline-flex items-center rounded-md bg-red-700 px-2 py-1 text-sm font-bold text-white`}
                >
                  {result.status}
                </span>
              </div>
            );
          } else if (result.status === "Alive") {
            return (
              <div className="absolute top-1 right-5">
                <span
                  className={`inline-flex items-center rounded-md bg-green-700 px-2 py-1 text-sm font-bold text-white`}
                >
                  {result.status}
                </span>
              </div>
            );
          } else {
            return (
              <div className="absolute top-1 right-5">
                <span
                  className={`inline-flex items-center rounded-md bg-gray-700 px-2 py-1 text-sm font-bold text-white`}
                >
                  {result.status}
                </span>
              </div>
            );
          }
        })()}
      </div>
    ));
  } else {
    display = `No characters found!`;
  }

  return <>{display}</>;
}

Cards.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      location: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteCharacter: PropTypes.func.isRequired,
};
export default Cards;
