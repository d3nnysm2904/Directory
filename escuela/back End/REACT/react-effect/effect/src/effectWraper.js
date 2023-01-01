import React, { useState, useEffect } from "react";
import Timer from './effect';


const TimerWraper = () =>
{
    const [ toggle, setToggle ] = useState( true );

    const toggleTimer = () =>
    {
        setToggle( !toggle );
    };
    return (
        <div>
            <button onClick={ toggleTimer } >Toggle Timer</button>
            { toggle && <Timer /> }
        </div>
    );
};

export default TimerWraper; 