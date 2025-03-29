import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";
import imageNotFound from "/src/assets/img/image_not_found.png";
import { useFavorites } from "../context/FavoritesContext";

function MovieCard({ movie }) {
  const [isHovered, setIsHovered] = useState(false);
  const { favorites, toggleFavorite } = useFavorites();

  const movieDate = movie.release_date
    ? movie.release_date.split("-")
    : ["Unknown"];
  const moviePoster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : imageNotFound;

  const isLiked = favorites.some((fav) => fav.id === movie.id);

  return (
    <div
      className="bg-neutral-800 rounded-xl w-72 h-[500px] flex flex-col p-10 hover:bg-neutral-900 transform hover:scale-105 transition-transform duration-200 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="pb-4 h-[330px] object-cover transition-all duration-300 ease-in-out"
        src={moviePoster}
        alt={movie.title || "Movie poster"}
        style={{
          filter: isHovered ? "brightness(50%)" : "brightness(100%)",
        }}
      />
      {isHovered && (
        <div
          onClick={() => toggleFavorite(movie)}
          className="absolute bottom-36 right-10 m-5 text-2xl text-pink-500 transition-all duration-300 transform hover:scale-125 cursor-pointer"
        >
          {isLiked ? <FaHeart /> : <FaRegHeart />}
        </div>
      )}
      <div className="text-sky-400 mt-3">
        <h1 className="text-sm">{movie.title}</h1>
        <p className="text-lg">{movieDate[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
