import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" absolute top-8 right-40">
      <Link
        to="/"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600  hover:text-blue-700 no-underline hover:underline transition duration-300"
      >
        Home
      </Link>
    </nav>
  );
}

export default Navbar;
