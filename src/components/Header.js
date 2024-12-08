import React from 'react';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {toggleGPTSearch} from "../utils/gptSlice";
import { changeLanguage } from '../utils/configSlice';
import { useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGPTSearch = useSelector(store => store?.gpt?.showGPTSearch);
  const handleSignoutClick = async () => {
    try {
      await signOut(auth);
      navigate("/")
    } catch {}
  };
  const handleToggleGPTSearch = () => {
    dispatch(toggleGPTSearch());
  }
  const changePreferredLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='flex justify-between w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
      <div>
        <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
      </div>
        <select className='bg-gray-900 text-white p-2 rounded-md' onClick={changePreferredLanguage}>
          <option value="en">English</option>
          <option value="nepali">Nepali</option>
          <option value="hindi">Hindi</option>
          <option value="es">Spanish</option>
        </select>
      {auth.currentUser && <div className='flex items-center text-white'>
        <p className='m-2'>Welcome, {auth.currentUser.displayName}</p>
        <span>|</span>
        <button className='m-2 bg-purple-800 hover:bg-purple-600 px-4 py-1 rounded-lg' onClick={handleToggleGPTSearch}>{showGPTSearch ? "Browse" : "GPT Search"}</button>
        <span>|</span>
        <button className='m-2 hover:underline' onClick={handleSignoutClick}>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header