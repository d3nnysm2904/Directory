import React from 'react';


const Die = ( { numbers, rollDice } ) =>
{
    return (
        <div >
            { numbers.map( num => <div className='Die'>{ num }</div > )
            }

            <div>
                <button onClick={ rollDice } >Roll</button>
            </div>

        </div >
    );
};

export default Die;