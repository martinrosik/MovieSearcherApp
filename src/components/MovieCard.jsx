function MovieCard({movie}) {
  return (
    <div className="bg-neutral-800 rounded-xl w-96 flex flex-col p-5">
      <img className="pb-4" src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}/>
      <div className="">
        <h1>{movie.title}</h1>
        <p>{movie.release_date}</p>
      </div>
    </div>
  )
}

export default MovieCard;