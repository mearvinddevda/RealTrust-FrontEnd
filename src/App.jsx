import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react'
import Home from "./Components/Home";
import Admin from "./Components/AdminPortal/Admin";

const App = () => {
  const appRoute =createBrowserRouter([
    {
      path: "/",
		  element: <Home />,
    },
    {
      path: "/admin",
		  element: <Admin />,
    },
  ])
  return (
    <div>
      <RouterProvider router={appRoute} />
      
    </div>
  )
}

export default App
