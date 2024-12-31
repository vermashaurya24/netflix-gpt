import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useQuery } from "@tanstack/react-query";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const fetchNowPlayingMovies = async () => {
    try {
      const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`;
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
    queryKey: [],
    queryFn: fetchNowPlayingMovies
  });

  if(!isLoading) {
    dispatch(addNowPlayingMovies(data.results));
  }
};

export default useNowPlayingMovies;