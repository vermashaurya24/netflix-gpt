import React, { useRef } from 'react';
import { lang } from '../utils/languageConstants';
import { useSelector } from 'react-redux';
import model from '../utils/gemini';

const GeminiSearchBar = () => {
  const currentLanguage = useSelector(state => state.config?.language);
  const searchText = useRef(null);
  const handleGeminiSearch = async () => {
    const result = await model.generateContent(searchText.current.value);
    console.log(result.response.text());
  }

  return (
    <div className='pt-[10%] flex justify-center z-10'>
        <form className='w-1/2 bg-black bg-opacity-80 rounded-xl grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type='text' className='py-2 px-4 m-2 col-span-9 rounded-lg bg-black bg-opacity-50 border text-white border-white' placeholder={lang[currentLanguage]?.geminiInputFieldText} />
            <button className='py-2 px-4 m-2 bg-red-600 col-span-3 text-white rounded-lg' onClick={handleGeminiSearch}>{lang[currentLanguage]?.searchText}</button>
        </form>
    </div>
  );
};

export default GeminiSearchBar;