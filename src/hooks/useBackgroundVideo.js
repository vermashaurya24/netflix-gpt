import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useBackgroundVideo = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    if (movieId) {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
        },
      };
      const response = await fetch(url, options);
      const videos = await response.json();
      const filteredTrailers = videos?.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailerObject = filteredTrailers.length
        ? filteredTrailers[0]
        : videos?.results[0];
      dispatch(addTrailerVideo(trailerObject));
    }
  };
};

export default useBackgroundVideo;
