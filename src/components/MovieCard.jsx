import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

function MovieCard({ movie }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setLiked] = useState(false);

  function setFavorite() {
    setLiked((prev) => !prev);
  }

  return (
    <div
      className="bg-neutral-800 rounded-xl w-96 flex flex-col p-5 hover:bg-neutral-900 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="pb-4 hover:opacity-40"
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      {isHovered &&
        (isLiked ? (
          <FaHeart
            onClick={setFavorite}
            className="absolute bottom-20 right-5 m-5 text-2xl text-red-700"
          />
        ) : (
          <FaRegHeart
            onClick={setFavorite}
            className="absolute bottom-20 right-5 m-5 text-2xl text-sky-400"
          />
        ))}
      <div className="text-sky-400">
        <h1>{movie.title}</h1>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
