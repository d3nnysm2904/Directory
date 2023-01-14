import React, { useContext } from 'react';
import ThemeContext from './family/themeContext';

const NavBar = () =>
{
    const { color, changeColor } = useContext( ThemeContext );
    return (
        <nav style={ { backgroundColor: color } } >
            <span  >WEBSITE</span>
            <button onClick={ changeColor } >Toggle Color</button>
        </nav>
    );
};


export default NavBar;