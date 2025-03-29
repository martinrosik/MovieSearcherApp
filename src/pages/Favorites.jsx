import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import { useFavorites } from "../context/FavoritesContext";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <>
      <Navbar />
      <div className="mt-20 px-10">
        {favorites.length === 0 ? (
          <h1 className="text-sky-400 text-xl text-center">
            You don’t have any favorite movies yet... 🎬 Start exploring and
            find your next must-watch! 🍿
          </h1>
        ) : (
          <>
            <h1 className="flex justify-center items-center mt-28 mb-24 text-1xl sm:text-2xl md:text-3xl lg:text-4xl text-sky-400">
              Take a look at your favorite movies! 🎬✨
            </h1>
            <div className="grid grid-cols-4 justify-center items-center ml-12 gap-10 mt-10">
              {favorites.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Favorites;
