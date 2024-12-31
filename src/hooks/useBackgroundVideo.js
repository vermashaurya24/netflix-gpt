import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useQuery } from "@tanstack/react-query";

const useBackgroundVideo = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
      },
    };
    const response = await fetch(url, options);
    return response.json();
  };

  const { data } = useQuery({
    queryKey: ["useBackgroundVideo", movieId],
    queryFn: getMovieVideos,
    enabled: !!movieId
  });

  const filteredTrailers = data?.results?.filter(
    (video) => video.type === "Trailer"
  );

  const trailerObject = filteredTrailers?.length
    ? filteredTrailers[0]
    : data?.results[0];

  if (trailerObject) {
    dispatch(addTrailerVideo(trailerObject));
  }
};

export default useBackgroundVideo;
