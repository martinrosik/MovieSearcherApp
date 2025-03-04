import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { searchMovies, getPopularMovies } from "../services/api.js";

function Searcher({ setMovies, setSearchDescription,  setError }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query.trim()) {
      const fetchPopularMovies = async () => {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
        setSearchDescription(true);
      };
      fetchPopularMovies();
    }
  }, [query, setMovies, setSearchDescription]);

  const handleSearch = async () => {
    try {
      if (query.trim()) {
        const searchedMovies = await searchMovies(query);
        setMovies(searchedMovies);
        setSearchDescription(false);
      }
    } catch (error) {
      setError("Oops! Something went wrong while searching for movies. Please check your internet connection and try again. If the problem persists, try again later or contact support.");
    }
  };

  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-center items-center mt-24 gap-2">
      <input
        className="w-96 h-12 px-4 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 placeholder-gray-400"
        type="text"
        placeholder="Search your favorite movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleEnterSearch}
      />
      <button
        type="submit"
        className="bg-neutral-800 hover:bg-neutral-700 h-12 w-12 flex justify-center items-center rounded-lg text-sky-400 transition-all duration-200"
        onClick={handleSearch}
      >
        <FaSearch className="w-5 h-5" />
      </button>
    </div>
  );
}

export default Searcher;
