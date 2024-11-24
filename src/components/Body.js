import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import Header from './Header'

const Body = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        onAuthStateChanged(auth, () => {
            if(auth.currentUser) {
                navigate("/browse");
            }
            else {
                navigate("/")
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