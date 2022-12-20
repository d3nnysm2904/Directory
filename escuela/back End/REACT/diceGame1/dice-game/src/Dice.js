import React, { useState } from 'react';
import Die from './Die';

const Dice = ( { numDice = 6, Title = 'Main Game', maxVal = 20 } ) =>
{
    const [ numbers, setNumbers ] = useState( Array.from( { length: numDice } ) );

    const rollDice = () => (
        setNumbers( numbers => (
            numbers.map( n => (
                Math.floor( Math.random() * maxVal + 1 )
            ) )
        ) )
    );
    // const dice = [];
    // for ( let i = 0; i < numDice; i++ )
    // {

    //     const num = Math.floor( Math.random() * maxVal + 1 );
    //     dice.push( num );
    // }



    return (
        <div className='DiceApp' >
            <h2>{ Title }</h2>
            { numbers.map( num => <Die val={ num } /> ) }

            < button onClick={ rollDice } className='dieButton' > Roll </button>
        </div > );



};

export default Dice;;