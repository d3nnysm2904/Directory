import React, { useState } from 'react';

const Item = ( { id, name, qty } ) =>
{


    return (
        <div>
            <ul>
                <li id={ id }>Product name : { name }</li>
                <li>Product quantity:{ qty }</li>

            </ul>

        </div >
    );
};

export default Item;