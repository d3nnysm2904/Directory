import React, { useState } from 'react';

const UserForm = () =>
{
    const initialState = {
        username: "",
        email: ''
    };
    const [ formData, setFormData ] = useState( initialState );

    // e = event object 
    // there is a piece of data we after e.target.value 
    const handleChange = ( e ) =>
    {
        console.log( e.target.name );
        // const { name, value } = e.target;
        // setFormData( ( data ) => ( {
        //     ...data,
        //     [ name ]: value,
        // } ) );
    };

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();
        const { username, email, password } = formData;
        alert( `Created user,${ username } w/ email ${ email } & password ${ password }` );
        setFormData( initialState );
    };
    return (
        <form
            onSubmit={ handleSubmit }
        >
            {/* htmlFor is the match the label with the input id  */ }
            <label htmlFor='username'>Enter username</label>
            <input
                id='username'
                type='text'
                name='username'
                placeholder='username'
                value={ formData.username }
                onChange={ handleChange } />

            <label htmlFor='email' >Email</label>
            <input
                id='email'
                type='email'
                name='email'
                placeholder='email'
                value={ formData.email }
                onChange={ handleChange } />


            <label htmlFor='password' >Enter password</label>
            <input
                id='passsword'
                type='passsword'
                name='passsword'
                placeholder='passsword'
                value={ formData.email }
                onChange={ handleChange } />
            <button
            // onClick={ handleSubmit } 
            >Create User</button>
        </form>
    );
};


export default UserForm;