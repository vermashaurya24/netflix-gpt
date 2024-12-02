import MovieCard from "./MovieCard";

const MovieList = ({ category, data }) => {
  return (
    <div className="p-4 text-white ml-8">
      <h1 className="text-3xl pt-2 pb-1">{category}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {data?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
