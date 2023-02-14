import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './components/pages';


function App() {
  const dispatch = useDispatch();




  const { items } = useSelector(({ pizzas, filters }) => {
    return {
      items: pizzas.items,
      sortBy: filters.sortBy
    }
  });

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home items={items} />} />

          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;