import React from 'react';
import { getUserDetails, removeUserDetails } from '../utils/tokens';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const user = getUserDetails();
  const handleSignoutClick = async () => {
    try {
      await signOut(auth);
      removeUserDetails();
      navigate("/")
    } catch {}
  }

  return (
    <div className='flex justify-between w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
      <div>
        <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
      </div>
      {user && <div className='flex items-center text-white'>
        <p className='m-2'>Welcome, {user.displayName}</p>
        <button className='m-2 hover:underline' onClick={handleSignoutClick}>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header