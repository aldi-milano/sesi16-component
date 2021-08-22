import React, { useState } from 'react';
import './App.css';
import Count from './components/Count';
import ProductItem from './components/ProductItem';
import ListProduct from './components/ListProduct';

function App () {
  return (
    <div>
      <ListProduct />

      <Count />
    </div>
  )
}

export default App;
