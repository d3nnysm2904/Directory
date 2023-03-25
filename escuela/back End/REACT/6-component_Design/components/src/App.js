import logo from './logo.svg';
import './App.css';
import React from 'react';
import TaskList from './MinimazingState';
import Dice from './Dice';

function App ()
{
  return (
    <div className="App">

      {/* <TaskList />
       */}
      <Dice />
      <Dice numDice={ 5 } />
    </div>
  );
}

export default App;
