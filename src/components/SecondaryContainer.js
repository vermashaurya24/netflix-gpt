import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(store => store?.movies?.nowPlayingMovies);
  const popularMovies = useSelector(store => store?.movies?.popularMovies);
  const topRatedMovies = useSelector(store => store?.movies?.topRatedMovies);

  return (
    <div className='bg-black'>
      <div className='relative z-20 -mt-52'>
        <MovieList category="Now Playing" data={nowPlayingMovies} />
        <MovieList category="Popular" data={popularMovies} />
        <MovieList category="Top Rated" data={topRatedMovies} />
        <MovieList category="Trending" data={nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;