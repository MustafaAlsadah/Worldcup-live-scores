import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import StandingsPage from './pages/StandingsPage';
import News from './pages/News';
import NewsPage from './pages/NewPage';
import data from './components/News.json';
import SpecificMatchPage from './pages/SpecificMatchPage';

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
    path: 'SpecificMatchPage',
    element: <SpecificMatchPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
