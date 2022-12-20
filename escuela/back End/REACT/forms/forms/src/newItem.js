import React, { useState } from 'react';


const NewItem = ( { addItem } ) =>
{
    const initialState = {
        name: '',
        qty: ''
    };
    const [ formData, setFormdata ] = useState( initialState );
    const handleChange = ( e ) =>
    {
        const { name, value } = e.target;
        setFormdata( formData => ( {
            ...formData,
            [ name ]: value
        } ) );
    };

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();
        addItem( { ...formData } );
        setFormdata( initialState );
    };
    return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor='name' ></label>
            <input
                id='name'
                type='text'
                name='name'
                placeholder='Item Name'
                value={ formData.name }
                onChange={ handleChange } >

            </input>
            <p>{ formData.name }</p>


            <label htmlFor='qty' >Quantity:{ formData.qty }</label>
            <input
                id='qty'
                name='qty'
                type='range'
                min='1'
                max='10'
                value={ formData.qty }
                onChange={ handleChange } />

            {/* <input
                id='qty'
                type='text'
                name='qty'
                placeholder='Quantity'
                value={ formData.qty }
                onChange={ handleChange } >

            </input> */}
            <button>Add item</button>
        </form >
    );

};





export default NewItem;