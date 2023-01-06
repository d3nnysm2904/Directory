import React from 'react';
import Food from './Food';
import FoodNav from './FoodNav';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App ()
{
  return (
    <div className="App">

      <BrowserRouter>
        <FoodNav />
        <Routes>
          <Route exact path='food/:name/:color' element={ <Food /> } />
        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
