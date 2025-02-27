import { Link } from "react-router";
import { BiSolidCameraMovie } from "react-icons/bi";
import "/src/index.css";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-center space-x-96 items-center bg-neutral-800 h-16">
        <div>
          <Link to="/" className="flex flex-row gap-3 justify-center items-center">
            <BiSolidCameraMovie className="text-sky-400 text-3xl"/>
            <h1 className="text-sky-400 font-bold text-xl flex">
              Movie Searcher
            </h1>
          </Link>
        </div>
        <ul className="flex gap-5 text-sky-400 text-xl">
          <li>
            <Link className="" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
