import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileViewer = ( { name = "Colt", color = 'red' } ) =>
{
    const [ data, setData ] = useState( null );
    useEffect( () =>
    {
        axios.get( `https://api.github.com/users/${ name }` ).then( res => setData( res.data.name ) );
    }, [ name ] );

    return (
        <h3 style={ { color } }>{ data ? data : "Loading..." }</h3>
    );

};

export default ProfileViewer;