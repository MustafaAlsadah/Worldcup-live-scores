import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import StandingsPage from './pages/StandingsPage';
import News from './pages/News';
<<<<<<< HEAD
import NewsPage from './pages/NewPage';
import data from './components/News.json';
import SpecificMatchPage from './pages/SpecificMatchPage';
=======
import NewsPage from './pages/NewsPage';
import data from "./components/News.json"

>>>>>>> d1e50af28888651c7fb503a4ec082165f9c333ef

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'StandingsPage',
    element: <StandingsPage />,
  },
  {
    path: 'News',
    element: <News />,
  },

  {
    path: '/NewsPage/',
    element: <NewsPage />,
  },

  {
<<<<<<< HEAD
    path: 'SpecificMatchPage/:id',
    element: <SpecificMatchPage />,
  },
=======
    path:"/NewPage/",
    element:<NewsPage/>
  }
>>>>>>> d1e50af28888651c7fb503a4ec082165f9c333ef
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
