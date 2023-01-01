import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileForm from './profilleForm';

const ProfileVewerWithSearch = () =>
{
    const [ profile, setProfile ] = useState( null );
    const [ url, setUrl ] = useState( `https://api.github.com/users/elie` );

    const search = term =>
    {
        setUrl( `https://api.github.com/users/${ term }` );
    };
    useEffect( () =>
    {
        console.log( 'Loading data ' );
        async function loadProfile ()
        {
            const res = await axios.get( url );
            setProfile( res.data );
        }
        loadProfile();
        return () => console.log( 'Cleaning up ' );
    }, [ url ] );

    return (
        <div>
            { profile ? <h1> Hi { profile.name }</h1> : <h1>Loading...</h1> }
            <ProfileForm search={ search } />
        </div>
    );
};

export default ProfileVewerWithSearch;