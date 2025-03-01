import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Searcher({ movie, setMovies, setSearchDescription }) {
  const [result, setResult] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const searchedMovie = event.target.value;
    setResult(searchedMovie);
  };

  const handleEnterSearch = (e) => {
    if (e.keyCode === 13) {
      handleSearch(e);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center mt-24 gap-2">
        <input
          className="w-96 h-12 px-4 bg-neutral-800 text-sky-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 placeholder-gray-400"
          type="text"
          placeholder="Search your favorite movie..."
          value={result}
          onChange={(e) => setResult(e.target.value)}
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
    </>
  );
}

export default Searcher;
