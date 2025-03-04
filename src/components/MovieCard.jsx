import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

function MovieCard({ movie }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setLiked] = useState(false);

  const movieDate = movie.release_date.split("-");

  function setFavorite() {
    setLiked((prev) => !prev);
  }
  return (
    <div
      className="bg-neutral-800 rounded-xl w-72 h-[500px] flex flex-col p-10 hover:bg-neutral-900 transform hover:scale-105 transition-transform duration-200 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="pb-4 h-[330px]"
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      {isHovered &&
        (isLiked ? (
          <FaHeart
            onClick={setFavorite}
            className="absolute bottom-36 right-10 m-5 text-2xl text-red-500 transition-all duration-300 transform hover:scale-110 shadow-lg"
          />
        ) : (
          <FaRegHeart
            onClick={setFavorite}
            className="absolute bottom-36 right-10 m-5 text-2xl text-sky-400 transition-all duration-300 transform hover:scale-110 shadowxs"
          />
        ))}
      <div className="text-sky-400 mt-3">
        <h1 className="text-sm">{movie.title}</h1>
        <p className="text-lg">{movieDate[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
