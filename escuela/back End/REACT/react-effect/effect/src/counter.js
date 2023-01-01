import React, { useState, useEffect } from 'react';

const Counter = () =>
{

    const [ num, setNum ] = useState( 0 );

    const increment = () =>
    {
        setNum( num + 1 );

    };

    useEffect( () =>
    {
        console.log( 'i run second  ' );
        document.title = `Hi ${ '!'.repeat( num ) }`;
    } );

    return (
        <div>
            { console.log( 'renders first ' ) }
            <h1>Current count :{ num }</h1>

            <button onClick={ increment } >Increment</button>
        </div>
    );
};

export default Counter;