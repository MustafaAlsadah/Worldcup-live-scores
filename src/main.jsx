import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import StandingsPage from './pages/StandingsPage';
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <StandingsPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
   </React.StrictMode>
)
