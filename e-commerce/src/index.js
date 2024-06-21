import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";
import ShoppingCart from "./components/ShoppingCart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

var router = createBrowserRouter([
  {
    path: '/',
    element:<App />
  },
  {
    path: '/header',
    element:<Header/>
  },
  {
    path: '/cart',
    element:<ShoppingCart/>
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
