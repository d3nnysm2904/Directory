import React, { useState } from 'react';
import Item from './Item';
import NewItemForm from './NewItemForm';
import { v4 as uuid } from 'uuid';

const ShoppingList = () =>
{
    const initalState = [
        { id: '1', name: 'peanut butter', qty: 2 },
        { id: 2, name: 'milk', qty: 1 } ];
    const [ items, setItems ] = useState( initalState );

    const addItem = ( newItem ) =>
    {
        setItems( items => [ ...items, { ...newItem, id: uuid() } ] );
    };

    return (
        <div>
            <h3>Shopping List</h3 >
            <NewItemForm addItem={ addItem } />
            <div>
                { items.map( ( { id, name, qty } ) =>
                    <Item
                        id={ id }
                        name={ name }
                        qty={ qty }
                        key={ uuid() } />
                ) }
            </div>
        </div >
    );
};

export default ShoppingList;;