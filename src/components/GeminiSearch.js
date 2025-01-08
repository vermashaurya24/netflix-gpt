import React from 'react';
import GeminiSearchBar from './GeminiSearchBar';
import GeminiMovieSuggestions from './GeminiMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GeminiSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 w-full h-screen overflow-hidden">
        <img
          className='h-screen w-full object-cover'
          src={BG_URL}
          alt="logo"
        />
      </div>
      <div className='pt-56 sm:pt-24 md:pt-6'>
        <GeminiSearchBar />
        <GeminiMovieSuggestions />
      </div>
    </div>
  );
};

export default GeminiSearch;