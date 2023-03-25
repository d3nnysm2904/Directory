import React from 'react';

const ButtonGroup = () =>
{

    const printColor = ( color ) =>
    {
        return console.log( `You clicked :${ color.toUpperCase() }` );

    };
    return (
        <div>
            <button onClick={ () => printColor( 'red' ) } >Red</button>
            <button onClick={ () => printColor( 'Yellow' ) } >Yellow</button>
            <button onClick={ () => printColor( 'Blue' ) }  >Blue</button>

        </div >

    );
};

export default ButtonGroup;;;