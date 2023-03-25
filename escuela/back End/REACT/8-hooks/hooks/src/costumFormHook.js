import React, { useState } from 'react';

const useField = ( initalState ) =>
{
    const [ formData, setFormData ] = useState( initalState );

    const handleChange = e =>
    {
        setFormData( formData => ( {
            ...formData,
            [ e.target.name ]: e.target.value
        } ) );
    };

    const resetFormData = () =>
    {
        setFormData( initalState );
    };
    return [ formData, handleChange, resetFormData ];
};

export default useField;
