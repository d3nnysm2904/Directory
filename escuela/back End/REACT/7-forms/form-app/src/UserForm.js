import React, { useState } from 'react';

const UserForm = () =>
{
    const inital_state = {
        username: '',
        email: '',
        password: ''
    };

    // const [ username, setUsername ] = useState( '' );
    // const [ email, setEmail ] = useState( '' );
    const [ formData, setFormData ] = useState( inital_state );
    const [ isInvalid, setIsInvalid ] = useState( true );
    const [ isTouched, setIsTouched ] = useState( false )

    const handleChange = ( e ) =>
    {

        setIsTouched( true )
        console.log( e.target.name );
        console.log( e.target.value );
        const { name, value } = e.target;
        setFormData( data => ( {
            ...data,
            [ name ]: value
        } ) );
        if ( value === '' )
        {
            setIsInvalid( true );
        } else { setIsInvalid( false ); }

        // we set the value of the input to username and we cahnged it with e.target.value
        // setUsername( e.target.value );
        // setEmail( e.target.value );
        // console.log( e.target.value );
    };

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();
        const { username, email } = formData;
        alert( `Created user , ${ username } and Email , ${ email } ` );
        setFormData( inital_state );
    };
    return (
        <form   >
            {/* htmlFor is for the labels for  */ }
            <label htmlFor='username' >Username</label>
            <input
                id='username'
                name='username'
                onChange={ handleChange }
                value={ formData.username }
                type='text'
                placeholder='User Form' />

            <label htmlFor='email' >Emails</label>
            <input
                id='email'
                name='email'
                type='email'
                onChange={ handleChange }
                value={ formData.email }
                placeholder='Email' />
            { isInvalid && isTouched && <span style={ { color: 'red' } }  >Email cannot be blank!! </span> }
            <button onClick={ handleSubmit } >Submit</button>
        </form>
    );
};

export default UserForm;