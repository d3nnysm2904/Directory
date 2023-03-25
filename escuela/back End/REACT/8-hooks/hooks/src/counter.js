import React from 'react';
import useLocalStorageState from './hooks/useLocalStorageState';
// import useToggleState from './hooks/useToggle';
const Counter = () =>
{
    const [ count, setCount ] = useLocalStorageState( 'count', 0 );
    const addCounter = () =>
    {
        setCount( count => count + 1 );
    };
    return ( <>
        <h1>{ count }</h1>
        <button onClick={ addCounter } >Add</button>
    </> );
};
// return ( <>
//     


export default Counter;
