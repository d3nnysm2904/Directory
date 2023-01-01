import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Eat from './Eat';

function App ()
{
  return (
    <main className="App">
      <BrowserRouter>

        <Route exact path='/home' >
          <Home />
        </Route>

        <Route exact path='/eat'>
          <Eat />
        </Route>

      </BrowserRouter>
    </main>
  );
}

export default App;
