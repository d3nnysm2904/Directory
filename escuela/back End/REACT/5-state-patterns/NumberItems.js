import React from 'react';

const NumberItem = ( { number, remove } ) =>
{
    // const HandleRemove = () =>
    // {
    //     remove( number );
    // };

    return (
        <li>
            <button onClick={ remove } >{ n }</button>\
        </li>
    );
};

export default NumberItem;