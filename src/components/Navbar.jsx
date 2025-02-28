import { Link } from "react-router";
import { BiSolidCameraMovie } from "react-icons/bi";
import "/src/index.css";

function Navbar() {
  const favoritesTitle = () => {
    document.title = "Favorites | Movie Searcher";
  };

  const homeTitle = () => {
    document.title = "Movie Searcher";
  };

  return (
    <div>
      <nav className="flex justify-center gap-[800px] items-center bg-neutral-800 h-16">
        <div>
          <Link
            onClick={homeTitle}
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
            <Link onClick={homeTitle} className="hover:underline" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={favoritesTitle}
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
