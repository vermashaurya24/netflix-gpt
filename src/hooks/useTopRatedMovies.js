import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useQuery } from "@tanstack/react-query";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const fetchTopRatedMovies = async () => {
    try {
      const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
        },
      };
      const response = await fetch(url, options);
      return await response.json();
    } catch {}
  };

  const {data, isLoading} = useQuery({
    queryKey: ["useTopRatedMovies"],
    queryFn: fetchTopRatedMovies
  });

  if(!isLoading) {
    dispatch(addTopRatedMovies(data.results));
  }
};

export default useTopRatedMovies;