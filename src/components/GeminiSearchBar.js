import React, { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import model from "../utils/gemini";
import {addGeminiSearchMovieResults} from "../utils/geminiSlice";

const GeminiSearchBar = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.config?.language);
  const searchText = useRef(null);

  const handleGeminiSearch = async () => {
    const query = `Act as a movie recommendation system. I will provide you the type of movies I want to see, and generate for me a comma seperated list of 5 movie names that are most famous and match most with my search term. My search term is ${searchText.current.value}`;
    const result = await model.generateContent(query);
    let movies = result.response.text().split(",").map((movie) => movie.trim());
    const data = movies.map(movie => fetchSuggestedMovie(movie));
    const moviesData = await Promise.all(data);
    dispatch(addGeminiSearchMovieResults({moviesData, movies}));
  };

  const fetchSuggestedMovie = async (movie) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
      },
    };
    const res = await fetch(url, options);
    const data = await res.json();
    return data.results;
  };

  return (
    <div className="pt-[10%] flex justify-center z-10">
      <form
        className="w-1/2 bg-black bg-opacity-80 rounded-xl grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="py-2 px-4 m-2 col-span-9 rounded-lg bg-black bg-opacity-50 border text-white border-white"
          placeholder={lang[currentLanguage]?.geminiInputFieldText}
        />
        <button
          className="py-2 px-4 m-2 bg-red-600 col-span-3 text-white rounded-lg"
          onClick={handleGeminiSearch}
        >
          {lang[currentLanguage]?.searchText}
        </button>
      </form>
    </div>
  );
};

export default GeminiSearchBar;
