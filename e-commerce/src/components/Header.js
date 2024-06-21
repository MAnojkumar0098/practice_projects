// components/Header.js
import { Link } from "react-router-dom";
import React from "react";
import "./index.css";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <div id="bagimg">
        <button>LOGIN</button>
      </div>
    </header>
  );
};

export default Header;
