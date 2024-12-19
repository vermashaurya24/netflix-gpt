import React from 'react';
import { POSTER_URL } from '../utils/constants';

const MovieCard = ({movie}) => {
  if(!movie?.poster_path) {
    return;
  }
  return (
    <div className='w-48 pr-4'>
      <img className='rounded-lg' alt='Movie Poster' src={POSTER_URL+movie?.poster_path} />
    </div>
  );
};

export default MovieCard;