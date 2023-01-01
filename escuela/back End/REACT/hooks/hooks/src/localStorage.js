import React, { useState, useEffect } from 'react';
// import useToggleState from './hooks/useToggle';
const Counter = () =>
{
    const [ count, setCount ] = useState( () =>
    {
        let value;
        value = JSON.parse(
            window.localStorage.getItem( 'count' ) || 0
        );
        return value;
    } );
    useEffect( () =>
    {
        window.localStorage.setItem( 'count', count );
    }, [ count ] );
    const addCount = () =>
    {
        setCount( count => count + 1 );
    };
    return ( <>
        <h1>{ count }</h1>
        <button onClick={ addCount } >Add</button>
    </> );
};
// return ( <>
//     


export default Counter;
