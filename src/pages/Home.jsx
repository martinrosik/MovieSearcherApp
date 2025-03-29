import Navbar from "../components/Navbar";
import Searcher from "../components/Searcher";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import ScrollToTop from "../components/ScrollToTop";
import { useEffect, useState, useRef } from "react";

import { getPopularMovies } from "../services/api.js";

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchDescription, setSearchDescription] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const observerTarget = useRef(null);

  useEffect(() => {
    loadPopularMovies(1);
  }, []);

  useEffect(() => {
    if (!observerTarget.current || page >= totalPages || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadPopularMovies(page + 1);
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(observerTarget.current);

    return () => observer.disconnect();
  }, [page, totalPages, loading]);

  const loadPopularMovies = async (nextPage) => {
    if (loading) return;

    setLoading(true);
    try {
      const { results, total_pages } = await getPopularMovies(nextPage);
      setMovies((prevMovies) =>
        Array.isArray(prevMovies) ? [...prevMovies, ...results] : [...results]
      );
      setTotalPages(total_pages);
      setPage(nextPage);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

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
      {loading && movies.length === 0 && (
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
              <p className="flex items-center justify-center text-gray-400 text-2xl col-span-4 pr-10">
                No movies found.
              </p>
            )}
      </div>
      <div ref={observerTarget} className="h-10"></div>

      {loading && (
        <p className="flex justify-center mt-5 text-sky-400">
          Loading more movies...
        </p>
      )}

      <ScrollToTop />
      <Footer />
    </>
  );
}

export default Home;
