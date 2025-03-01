import Navbar from "../components/Navbar";
import Searcher from "../components/Searcher";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard"
import { useEffect, useState } from "react";

import {searchMovies, getPopularMovies} from '../services/api.js'

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect (() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies()
        setMovies(popularMovies)
      } catch(error) {
        setError(error.message);
      } finally {
        setLoading(false)
      }
    } 
    loadPopularMovies()
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <Searcher movie={movies}/>
      {loading && <p className="flex mt-4 text-sky-400 justify-center items-center">Loading movies...</p>}
      {error && <p className="flex mt-4 text-red-500 justify-center items-center">Error: {error}</p>}
      <div className="grid grid-cols-3 justify-center items-center ml-20 gap-5 mt-10">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Home;
