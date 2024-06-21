// components/ProductItem.js

import React from 'react';
import './index.css'

const ProductItem = ({ product }) => {
  function clickhandler() {
    
  }
  return (<>
    <div className="product-item" id='pro'>
      <h3>{product.name}</h3>
      <p>Rs.{product.price}</p>
      <button onClick={clickhandler}>Add to Cart</button>
    </div></>
  );
};

export default ProductItem;
