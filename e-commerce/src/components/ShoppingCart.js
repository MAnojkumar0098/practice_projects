// components/ShoppingCart.js

import { Link } from "react-router-dom";
import React from "react";
import "./index.css";

const ShoppingCart = () => {
  // Add shopping cart logic here

  return (
    <aside>
      <Link to="/">return to home</Link>
      <h2 id="cart">Shopping Cart</h2>
      <div id="total">h</div>
    </aside>
  );
};

export default ShoppingCart;
