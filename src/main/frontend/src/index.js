import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './components/Editor/Landing';
import Homepage from './components/Homepage/Homepage'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
//    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/Landing',
        element: <Landing />,
      },
      {
         path: '/About',
         element: <About />,
      },
      {
        path:'Contact',
        element:<Contact />
      },
      {
        path:'Login',
        element:<Login />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
