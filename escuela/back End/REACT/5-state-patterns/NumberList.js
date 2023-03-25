import React, { useState } from 'react';
import NumberItem from './NumberItems';

const NumberList = () =>
{
    const [ number, setNum ] = useState( [ 2, 56, 8, 10, 28 ] );
    const remove = ( num ) =>
    {
        setNum( number.filter( n => n !== num ) );

    };
    return (
        <ul>
            { number.map( n => (
                <NumberItem number={ n } remove={ () => remove( n ) } key={ n } />
            ) ) }
        </ul>
    );
};

import default NumberList; 