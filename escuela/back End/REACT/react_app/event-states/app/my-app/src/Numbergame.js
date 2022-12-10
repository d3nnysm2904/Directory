import React, { useState } from 'react';
import './NumberGame.css';
const NumberGame = ( props ) =>
{
    const reset = () =>
    {

        setTarget( genRandom() );
        setGuess( 0 );
        setGuessCount( 0 );
    };

    const makeGuess = () =>
    {
        setGuess( genRandom() );
        setGuessCount( guessCount + 1 );
    };
    const genRandom = () => Math.floor( Math.random() * 10 ) + 1;
    const [ target, setTarget ] = useState( genRandom() );
    const [ guess, setGuess ] = useState( genRandom() );
    const [ guessCount, setGuessCount ] = useState( 0 );
    const isWinner = target === guess;

    return (
        <div className='game'>
            <h1>Target Num:{ target }</h1>

            <h1 className={ isWinner ? 'winner' : 'loser' } >Your guess:{ guess }</h1>

            {/* <h1 style={ { color: target === guess ? 'green' : 
            'red' } }  >Your guess:{ guess }</h1> */ }

            {/* { isWinner ? null : <button onClick={ () => setGuess( genRandom() ) } > Generate Number</button> } */ }

            <h4>Guess # :{ guessCount }</h4>

            { !isWinner && <button onClick={ makeGuess } > Generate Number</button> }

            <button onClick={ reset } >New  Game</button>
        </div>
    );

};

export default NumberGame;