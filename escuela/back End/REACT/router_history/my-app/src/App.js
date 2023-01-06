import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Eat from './Eat';
import Drink from './Drinks';
import NavBar from './NavBar'

function App ()
{
  return (
    <main className="App">
      <BrowserRouter>
        <Link to='/' >Home</Link>
        <Routes>
          <Route exact path='/home' element={ <Home /> } />
          <Route exact path='eat' element={ <Eat /> } />

          <Route exact path='drink' element={ <Drink /> } />
          <Route exact path='' element={ <NavBar /> } />


        </Routes >
        {/* <Route exact path='/eat'>
          <Eat />
        </Route> */}

      </BrowserRouter>
    </main>
  );
}

export default App;
