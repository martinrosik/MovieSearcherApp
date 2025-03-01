import { Link, useLocation } from "react-router";
import { BiSolidCameraMovie } from "react-icons/bi";
import { useEffect } from "react";
import "/src/index.css";

function Navbar() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/favorites") {
      document.title = "Favorites | Movie Searcher";
    } else {
      document.title = "Movie Searcher";
    }
  }, [location.pathname]);

  return (
    <div>
      <nav className="flex justify-center gap-[800px] items-center bg-neutral-800 h-16">
        <div>
          <Link
            to="/"
            className="flex flex-row gap-3 justify-center items-center"
          >
            <BiSolidCameraMovie className="text-sky-400 text-3xl" />
            <h1 className="text-sky-400 font-bold text-xl flex">
              Movie Searcher
            </h1>
          </Link>
        </div>
        <ul className="flex gap-5 text-sky-400 text-xl">
          <li>
            <Link className="hover:underline" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline"
              to="/favorites"
            >
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
