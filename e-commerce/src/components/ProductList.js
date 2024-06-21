// components/ProductList.js

import React from 'react';
import ProductItem from './ProductItem';
import './index.css'

const ProductList = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    { id: 3, name: 'product 3', price: 39},
    { id: 3, name: 'product 3', price: 39}, 
    { id: 3, name: 'product 3', price: 39},
    { id: 3, name: 'product 3', price: 39},
    { id: 3, name: 'product 3', price: 39},
    { id: 3, name: 'product 3', price: 39},
  ];

  return (
    <section>
      <h2 id='products' >PRODUCTS</h2>
      <div className="product-list" >
        {products.map((product) => (
          <ProductItem id='pr' key={product.id} product={product} />
        ))}
      </div> 
    </section>
  );
};

export default ProductList;
