import { Link, useLocation } from "react-router";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
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
      <div className="flex justify-end gap-[500px] items-center">
        <p className="text-sky-200 text-sm">
          Watch movies and series online totally for free!
        </p>
        <ul className="flex flex-row gap-6 mr-[150px] p-1">
          <Link
            to="/login"
            className="flex flex-row gap-2 justify-center items-center"
          >
            <FaUser className="text-sky-400" />
            <p className="text-sky-400 hover:underline">Sign In</p>
          </Link>
          <Link
            to="/register"
            className="flex flex-row gap-2 justify-center items-center"
          >
            <FaPlus className="text-sky-400" />
            <p className="text-sky-400 hover:underline">Sign up</p>
          </Link>
        </ul>
      </div>
      <nav className="flex flex-row justify-center gap-[600px] items-center bg-neutral-800 h-16">
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
            <Link className="hover:underline" to="/favorites">
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
