import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Messenger from "./components/messenger";
import Sidebar from "./components/sidebar";
import { io } from "socket.io-client";
import Group from "./components/group";

const socket = io("http://localhost:3001");
const root = ReactDOM.createRoot(document.getElementById("root"));

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/public",
    element: <Messenger socket={socket} />,
  },
  {
    path: "/personal",
    element: <Sidebar socket={socket} />,
  },
  {
    path: '/group',
    element:<Group socket={socket}/>
  }
]);
root.render(
  <>
    <RouterProvider router={router} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
