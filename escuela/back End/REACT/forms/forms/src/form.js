import React, { useState } from 'react';

const Form = () =>
{
    const initialState = {
        username: '',
        email: '',
        password: ''
    };
    const [ formData, setFormData ] = useState( initialState );
    const handleChange = ( e ) =>
    {
        // console.log( e.target.name );
        const [ name, value ] = e.target;
        setFormData( data => ( {
            ...data,
            [ name ]: value
        } ) );
    };
    // const handleChange = ( e ) =>
    // {
    //     // console.log( e.target.value );
    //     setUsername( e.target.value );

    // };
    // const handleEmail = ( e ) =>
    // {
    //     setEmail( e.target.value );
    // };
    const handleSubmit = ( e ) =>
    {
        e.preventDefault();
        const { username, email, password } = formData;
        alert( `Created username : ${ username } , email : ${ email }and password ${ password }` );
        setFormData( initialState );
    };
    return (
        <form onSubmit={ handleSubmit }>

            <label htmlFor='username'>Username</label>
            <input
                name='username'
                id='username'
                onChange={ handleChange }
                type='text'
                placeholder='username'
                value={ formData.username }>

            </input>

            <label
                htmlFor='email'>Email
            </label>
            <input
                name='email'
                value={ formData.email }
                type='email'
                id='email'
                placeholder='email'
                onChange={ handleChange }
            ></input>
            <label htmlFor='password' >Password</label>

            <input
                name='password'
                value={ formData.password }
                type='password'
                id='password'
                placeholder='password'
                onChange={ handleChange }
            ></input>
            <button /* onClick={ handleSubmit }*/ >Add me to the list </button>
        </form >
    );
};


export default Form;
