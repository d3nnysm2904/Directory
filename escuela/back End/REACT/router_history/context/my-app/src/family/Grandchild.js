import React from 'react';
import GreatGrandChild from './GreatGrandChild';

const Grandchild = ( { counter, add } ) =>
{
    return (
        <div style={ { color: 'red', border: '4px solid green', margin: '1rem' } }>
            <h2>{ counter }</h2>
            <p>Im the grandchild</p>

            {/* <GreatGrandChild counter={ counter } add={ add } /> */ }
            <GreatGrandChild />

        </div>
    );
};

export default Grandchild;