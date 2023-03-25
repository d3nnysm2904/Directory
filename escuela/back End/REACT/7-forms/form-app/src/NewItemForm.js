import React, { useState } from 'react';

const NewItemForm = ( { addItem } ) =>
{
    const initalState = {
        name: '',
        qty: ''
    };
    const [ formData, setFormData ] = useState( initalState );
    const { name, qty } = formData;

    const handleChange = ( e ) =>
    {
        const { name, value } = e.target;
        setFormData( formData => ( {
            ...formData,
            [ name ]: value
        } ) );
    };
    const handleSubmit = ( e ) =>
    {
        e.preventDefault();

        addItem( { ...formData } );
        setFormData( initalState );

    };

    return (
        <form onSubmit={ handleSubmit } >
            <label htmlFor='name' >Product</label>
            <input
                id='name'
                type='text'
                name='name'
                placeholder='Item Name'
                value={ name }
                onChange={ handleChange } />

            <label htmlFor='qty' >Quantity { qty } </label>
            <input
                type='range'
                min='1'
                max='10'
                id='qty'
                name='qty'
                placeholder='Quantity'
                value={ qty }
                onChange={ handleChange } />
            {/* <input
                id='qty'
                name='qty'
                type='text'
                placeholder='Quantity'
                value={ qty }
                onChange={ handleChange } /> */}

            <button>Add Item</button>
        </form>
    );
};

export default NewItemForm;