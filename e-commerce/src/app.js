// App.js

import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <ProductList />
        <ShoppingCart />
      </main>
    </div>
  );
};

export default App;
