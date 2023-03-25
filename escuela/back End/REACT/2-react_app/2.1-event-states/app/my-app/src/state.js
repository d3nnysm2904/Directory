import React, { useState } from 'react';

const State = ( props ) =>
{
    const [ count, setCount ] = useState( 0 );
    return (
        <>

            <h1>Count is { count }</h1>
            <button onClick={ () => setCount( count + 1 ) } >Add</button>
            <button onClick={ () => setCount( count - 1 ) } >Substract</button>

        </>
    );
};

export default State;;