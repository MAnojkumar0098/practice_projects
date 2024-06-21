// App.js
import { Home } from './components/home';
import About from './components/about';
import { Contact } from './components/contact';
import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const App = () => {

  return ( 
    <div id='app'>
        <Link to='/home' id='app'>Home</Link>
        <Link to='/about' id='app'>About</Link>
        <Link to='/contact' id='app'>Contact</Link>
    </div>
  );
};

export default App;
