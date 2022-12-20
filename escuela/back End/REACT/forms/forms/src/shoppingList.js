import React, { useState } from 'react';
import Item from './item';
import NewItem from './newItem';
import { v4 as uuid } from 'uuid';

const ShoppingList = () =>
{

    const initialState = [
        { id: uuid, name: 'Peanut Butter', qty: 2 },
        { id: uuid, name: 'Bread', qty: 1 }
    ];

    const [ items, setItems ] = useState( initialState );
    const addItem = ( newItem ) =>
    {
        setItems( items => [ ...items, { ...newItem, id: uuid } ] );
    };
    return (
        <div>
            <h3>Shopping List</h3>
            <NewItem addItem={ addItem } />
            { items.map( ( { id, name, qty } ) => <Item key={ id } id={ id } name={ name } qty={ qty } /> ) }
        </div>
    );
};


export default ShoppingList;