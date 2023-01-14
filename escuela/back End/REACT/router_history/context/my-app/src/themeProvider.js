import React, { useState } from 'react';
import ThemeContext from './family/themeContext';


// Children is a special prop made by react, whatever we nest inside a component will be avalable with the children prop 


const ThemeProvider = ( { children } ) =>
{
    const [ color, setThemeColor ] = useState( 'purple' );

    const changeColor = () =>
    {
        setThemeColor( color => color === 'purple' ? 'orange' : 'purple' );
    };
    return (
        <ThemeContext.Provider value={ { color, changeColor } } >
            { children }



        </ThemeContext.Provider>
    );

};

export default ThemeProvider;