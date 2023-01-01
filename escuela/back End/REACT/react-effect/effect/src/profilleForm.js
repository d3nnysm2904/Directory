import React, { useState } from 'react';


const ProfileForm = ( { search } ) =>
{
    const [ term, setTerm ] = useState( "" );
    const handleChange = evt =>
    {
        setTerm( evt.target.value );
    };

    const handleSubmit = evt =>
    {
        evt.preventDefault();
        search( term );
        setTerm( '' );
    };

    return ( <div>
        <form onSubmit={ handleSubmit } >
            <input type='text' value={ term } onChange={ handleChange } />
            <button>Search!</button>
        </form>
    </div>
    );
};

export default ProfileForm;