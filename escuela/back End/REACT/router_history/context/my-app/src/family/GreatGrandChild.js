import React, { useContext } from 'react';
import CountContext from './context';


const GreatGrandChild = () =>
{
    const { counter, add } = useContext( CountContext );
    return (
        <>
            <div style={ { border: '4px solid yellow' } } >
                <h3>Count is { counter }</h3>
                <p> Im the Great Grand Child</p></div>
            <button onClick={ add }>Add Count</button>
        </>
    );
};

export default GreatGrandChild;