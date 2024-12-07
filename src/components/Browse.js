import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  const showGPTSearch = useSelector(store => store?.gpt?.showGPTSearch);

  return (
    <div>
      {showGPTSearch ? <GPTSearch /> : 
      <>
        <MainContainer />
        <SecondaryContainer />
      </>}
    </div>
  );
};

export default Browse;
