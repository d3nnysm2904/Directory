import React from "react";

const Event = () =>
{
    const activateLaser = ( e ) =>
    {
        // const data = { name: "Messi", age: "37" };
        // console.log( data );
        console.log( e.currentTarget );
        console.log( e );
        console.log( 'PEW PEW' );
    };

    const mouseOver = () =>
    {
        console.log( 'Mouse is over me  ' );

    };
    return (
        <>
            <button onClick={ activateLaser } >Click me </button>
            <button onMouseOver={ mouseOver } >Click me 2</button>
            <textarea
                onScroll={ activateLaser } rows='2'>
                loadskfgbsaokdig
                bgiwragftsvkvbwo
                sghowhgosdgvjsac
                vkjabsgowglsjkdv
                lags
            </textarea>
        </>
    );
};

export default Event;