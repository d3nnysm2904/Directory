import React, { useState, useContext } from "react";
import Grandchild from "./Grandchild";
import CountContext from './context';
import ThemeContext from './themeContext';


function Child ()
{
  const [ counter, setCounter ] = useState( 0 );
  const { color } = useContext( ThemeContext );

  const add = () =>
  {
    setCounter( counter => counter + 1 );
  };
  return (
    <CountContext.Provider value={ { counter, add } }>

      <div style={ { border: `4px solid ${ color }`, margin: '1rem ', width: '500px' } }>
        <h1>{ counter }</h1>
        <p>I'm the child!</p>
        {/* <Grandchild counter={ counter } add={ add } /> */ }
        <Grandchild />
      </div>
    </ CountContext.Provider>
  );
}

export default Child;
