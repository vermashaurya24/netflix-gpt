import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { removeUserDetails, saveUserDetails } from '../utils/tokens'

const Body = () => {
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if(user) {
                saveUserDetails(user);
            }
            else {
                removeUserDetails();
            }
        })
    }, [])

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ]);

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body