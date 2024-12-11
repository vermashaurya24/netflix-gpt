import React from 'react';
import GeminiSearchBar from './GeminiSearchBar';
import GeminiMovieSuggestions from './GeminiMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GeminiSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BG_URL}
          alt="logo"
        />
      </div>
      <GeminiSearchBar />
      <GeminiMovieSuggestions />
    </div>
  );
};

export default GeminiSearch;