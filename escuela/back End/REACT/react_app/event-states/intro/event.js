import React from "react";

const Event = () =>
{
    const activateLaser = ( e ) =>
{
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
            <button onMouseOver={ mouseOver } ></button>
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