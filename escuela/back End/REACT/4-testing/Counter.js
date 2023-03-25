import React, { useState } from 'react';

const Counter = () =>
{
    const [ count, setCount ] = useState( 0 );
    const increment = () => { setCount( count + 1 ); };
    return (
        <div>
            <h1>Let's Count</h1>
            <h2>Current count:{ count }</h2>
            <button onClick={ increment } >Add</button>
            <label htmlFor="usr" >Username</label>
            <input id="usr" type="text" placeholder="username" ></input>
        </div>
    );

};

export default Counter;