import React from 'react';
import { lang } from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GPTSearchBar = () => {
  const currentLanguage = useSelector(state => state.config?.language);
  return (
    <div className='pt-[10%] flex justify-center z-10'>
        <form className='w-1/2 bg-black bg-opacity-80 rounded-xl grid grid-cols-12'>
            <input type='text' className='py-2 px-4 m-2 col-span-9 rounded-lg bg-black bg-opacity-50 border border-white' placeholder={lang[currentLanguage]?.gptInputFieldText} />
            <button className='py-2 px-4 m-2 bg-red-600 col-span-3 text-white rounded-lg'>{lang[currentLanguage]?.searchText}</button>
        </form>
    </div>
  );
};

export default GPTSearchBar;