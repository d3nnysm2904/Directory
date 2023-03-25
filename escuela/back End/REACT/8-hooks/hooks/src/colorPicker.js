import React from 'react';
import useLocalStorageState from './hooks/useLocalStorageState';
// import useToggleState from './hooks/useToggle';
const ColorPicker = () =>
{
    const [ color, setState ] = useLocalStorageState( "color", "teal" );

    const changeColor = ( e ) =>
    {
        setState( e.target.value );
    };

    return ( <>
        <h1 style={ { color } }>Your color is { color }</h1>
        <select value={ color } onChange={ changeColor }>
            <option value='red' >Red</option>
            <option value='teal' >Teal</option>
            <option value='orange' >Orange</option>
            <option value='blue' >Blue</option>
            <option value='purple' >Purple</option>
        </select>
    </> );
};
// return ( <>
//     


export default ColorPicker;
