import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import { BG_URL } from '../utils/constants';

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(store => store?.movies?.nowPlayingMovies);
  const popularMovies = useSelector(store => store?.movies?.popularMovies);
  const topRatedMovies = useSelector(store => store?.movies?.topRatedMovies);

  return (
    <div style={{ backgroundImage: `url(${BG_URL})` }}>
      <div className='relative bg-black bg-opacity-50 z-20 -mt-52'>
        <MovieList category="Now Playing" data={nowPlayingMovies} />
        <MovieList category="Popular" data={popularMovies} />
        <MovieList category="Top Rated" data={topRatedMovies} />
        <MovieList category="Trending" data={nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;