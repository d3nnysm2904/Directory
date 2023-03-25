import React from 'react';
import useField from './costumFormHook';

const SignUpForm = () =>
{
    const [ formData, handleChange, resetFormData ] = useField( {
        username: ''
        , email: ''
        , password: ''
    } );
    const handleSubmit = e =>
    {
        e.preventDefault();
        resetFormData();
    };
    return ( <form
        onSubmit={ handleSubmit }>
        <input
            type='email/'
            name='email'
            value={ formData.email }
            onChange={ handleChange }
            placeholder='email'
        />

        <input
            type='text'
            name='username'
            value={ formData.username }
            onChange={ handleChange }
            placeholder='username'
        />

        <input
            type='text'
            name='password'
            value={ formData.password }
            onChange={ handleChange }
            placeholder='password'
        />
        <button>Submit</button>
    </form> );
};


export default SignUpForm;