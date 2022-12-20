import React, { useState } from 'react';

// better use Formik
// Material UI
// reacstrap

const SimpleForm = () =>
{
    const initialState = {
        email: ''
    };


    const { formData, setFormdata } = useState( initialState );
    const { isInvalid, setIsInvalid } = useState( true );
    const { isTouched, setIsTouched } = useState( false );


    const handleChange = ( e ) =>
    {
        setIsTouched( true );
        const { name, value } = e.target;

        if ( value === '' )
        {
            setIsInvalid( true );
        } else
        {
            setIsInvalid( false );
        }

        setFormdata( data => ( {
            ...data,
            [ name ]: value
        } ) );
    };

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();
        const { email } = formData;

        if ( !isInvalid )
        {
            alert( `Added you to mailing list, ${ email }` );
            setFormdata( initialState );
        }
    };


    return (
        <form onSubmit={ handleSubmit } >
            <h3>Simple Form</h3>
            <label htmlFor='email '>Email</label>
            <input
                type='email'
                placeholder='email'
                name='email'
                id="email"
                value={ formData.email }
                onChange={ handleChange }
            />
            { isInvalid && isTouched && <span style={ { color: 'red' } } >Email cannot be blank!</span> }
            <button >Add me to the list </button>
        </form >
    );
};



export default SimpleForm;