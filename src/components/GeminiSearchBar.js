import React from "react";
import { lang } from "../utils/languageConstants";
import useGeminiSearchBar from "../hooks/useGeminiSearchBar";

const GeminiSearchBar = () => {
  const {handleGeminiSearch, currentLanguage, searchText} = useGeminiSearchBar();
  return (
    <div className="pt-[10%] flex justify-center z-10">
      <form
        className="w-full sm:w-1/2 bg-black bg-opacity-80 rounded-xl grid grid-cols-12 mx-4 sm:mx-0"
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
