import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector(state => state.movies?.nowPlayingMovies);
  if(!movies) {
    return;
  }
  const movieIndex = Math.floor(Math.random()*20) + 1;
  const mainMovie = movies[movieIndex];
  const {original_title, overview} = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground />
    </div>
  )
}

export default MainContainer