import React, { useState } from 'react';
import Die from './Die';


const Dice = ( { numDice = 6, title, maxVal = 20 } ) =>
{
    const [ numbers, setNumber ] = useState( Array.from( { length: numDice } ) );//This will create an array with the lentgh of numDice

    const rollDice = () => (
        setNumber( numbers => numbers.map( n => Math.floor( Math.random() * maxVal ) + 1 ) )
    );

    return (
        <Die numbers={ numbers } rollDice={ rollDice } />
    );


};




export default Dice;