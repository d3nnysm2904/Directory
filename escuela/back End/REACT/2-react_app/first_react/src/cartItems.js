import React from 'react';
import "./CartItems.css";


const CartItems = ( { items, img, price, quantity } ) => (
    <div className="CartItems">
        <h4 className="CartItems-header">{ items }</h4>
        <img className="CartItems-img" src={ img } alt="" width='200' />
        <ul>

            <li style={ { color: "magenta", backgroundColor: "yellow" } }>Price:${ price }</li>
            <li>Quantity:{ quantity }</li>
            <li>Subtotal:{ price * quantity }</li>
        </ul>
    </div>
);

export default CartItems;