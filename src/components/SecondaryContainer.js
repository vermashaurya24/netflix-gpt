import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(store => store?.movies?.nowPlayingMovies);
  return (
    <div className='bg-black'>
      <div className='relative z-20 -mt-52'>
        <MovieList category="Now Playing" data={nowPlayingMovies} />
        <MovieList category="For You" data={nowPlayingMovies} />
        <MovieList category="Trending" data={nowPlayingMovies} />
        <MovieList category="Popular" data={nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;