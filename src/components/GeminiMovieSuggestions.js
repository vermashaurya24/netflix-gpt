import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GeminiMovieSuggestions = () => {
  const {geminiSearchMovieNames, geminiSearchMovieResults} = useSelector(store => store?.gemini);

  if(!geminiSearchMovieNames.length) {
    return null;
  }

  return (
    <div className='p-4 m-4 bg-black text-white rounded-xl bg-opacity-70'>
      {geminiSearchMovieNames.map((movie, index) => <MovieList key={index} category={movie} data={geminiSearchMovieResults[index]} />)}
    </div>
  );
};

export default GeminiMovieSuggestions;