import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
   </React.StrictMode>
)
