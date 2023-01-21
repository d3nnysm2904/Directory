import React, { useState, useEffect } from 'react';
import History from './History';
import Toggle from './Toggle';


const Form = () =>
{
    const initialState = {
        noun: "",
        noun2: "",
        adj: "",
        adj2: ""
    };



    // const INITIAL_STATE = 
    const [ formData, setFormData ] = useState( initialState );
    const [ toggle, setToggle ] = Toggle( false );





    const handleChange = evt =>
    {
        const { name, value } = evt.target;
        setFormData( fData => ( {
            ...fData,
            [ name ]: value
        } ) );

    };
    const handleSubmit = evt =>
    {
        evt.preventDefault();
        console.log( "Check out state ->", formData );

        // do something with the data submitted
        setToggle();
        console.log( toggle );
        // setFormData( initialState );
    };



    return (
        <div  >


            <form onSubmit={ handleSubmit }
                className={ toggle ? 'Form-submited' : 'Form-not-submited' } >

                <input
                    id="noun"
                    name="noun"
                    value={ formData.noun }
                    onChange={ handleChange }
                    placeholder='First Noun'
                />

                <input
                    id="noun2"
                    name="noun2"
                    value={ formData.noun2 }
                    onChange={ handleChange }
                    placeholder='Second Noun'
                />


                <input
                    id="firstAdj"
                    name="adj"
                    value={ formData.adj }
                    onChange={ handleChange }
                    placeholder='First Adjective'
                />
                <input
                    id="secondAdj"
                    name="adj2"
                    value={ formData.adj2 }
                    onChange={ handleChange }
                    placeholder='Second Adjective'
                />


                <button >Create History</button>

            </form>

            < History formData={ formData } toggle={ toggle } handleSubmit={ handleSubmit } />
        </div>
    );
};

export default Form;