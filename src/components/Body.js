import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { removeUserDetails, saveUserDetails } from '../utils/tokens'
import Header from './Header'

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

  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body />,
        children: [
            {
                path: "/",
                element: <Login />
            },
            {
                path: "/browse",
                element: <Browse />
            }
        ]
    },
]);

const App = () => {
    return <RouterProvider router={appRouter} />;
};

export default App;