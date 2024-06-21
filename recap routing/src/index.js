import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';

let router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/home',
    element:<Home/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/contact',
    element:<Contact/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
