import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GeminiSearch from "./GeminiSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  const showGeminiSearch = useSelector(store => store?.gemini?.showGeminiSearch);

  return (
    <div>
      {showGeminiSearch ? <GeminiSearch /> : 
      <>
        <MainContainer />
        <SecondaryContainer />
      </>}
    </div>
  );
};

export default Browse;
