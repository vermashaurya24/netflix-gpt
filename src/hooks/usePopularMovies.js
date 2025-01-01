import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useQuery } from "@tanstack/react-query";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const fetchPopularMovies = async () => {
    try {
      const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
        },
      };
      const response = await fetch(url, options);
      return response.json();
    } catch {}
  };

  const {data, isLoading} = useQuery({
    queryKey: ["usePopularMovies"],
    queryFn: fetchPopularMovies
  });

  if(!isLoading) {
    const reversedResults = [...data.results].reverse();
    dispatch(addPopularMovies(reversedResults));
  };
};

export default usePopularMovies;