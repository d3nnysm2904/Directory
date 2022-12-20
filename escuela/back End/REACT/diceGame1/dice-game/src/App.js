import React from 'react';
import Dice from './Dice';
import './App.css';

function App ()
{
  return (
    <div className="App">

      <Dice numDice={ 4 } maxVal={ 6 } Title='Main Game' />
    </div>
  );
}

export default App;
