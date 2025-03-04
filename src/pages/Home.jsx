import Navbar from "../components/Navbar";
import Searcher from "../components/Searcher";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";

import { getPopularMovies } from "../services/api.js";

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchDescription, setSearchDescription] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <Searcher
        movie={movies}
        setMovies={setMovies}
        setSearchDescription={setSearchDescription}
        setError={setError}
      />
      {loading && (
        <p className="flex mt-4 text-sky-400 justify-center items-center">
          Loading movies...
        </p>
      )}
      {error && (
        <p className="flex mt-4 text-red-500 justify-center items-center">
          Error: {error}
        </p>
      )}
      {searchDescription ? (
        <h1 className="flex justify-center items-center mt-28 mb-24 text-5xl text-sky-400">
          Check out the latest trending movies! 🤩
        </h1>
      ) : (
        <h1 className="flex justify-center items-center mt-28 mb-24 text-5xl text-sky-400">
          Movies you’ve searched for:
        </h1>
      )}
      <div className="grid grid-cols-4 justify-center items-center ml-12 gap-10 mt-10">
        {movies.length > 0
          ? movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
          : !loading &&
            !error && (
              <p className="flex items-center justify-center text-gray-400">No movies found.</p>
            )}
      </div>
      <Footer />
    </>
  );
}

export default Home;
