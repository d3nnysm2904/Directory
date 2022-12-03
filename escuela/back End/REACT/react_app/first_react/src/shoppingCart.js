import React from 'react';
import CartItems from "./cartItems";
import "./ShoppingCart.css";

const ShoppingCart = ( { items, username } ) =>
{
    const total = items.reduce( ( acc, i ) => { return acc + i.price * i.quantity; }, 0 );
    return (
        <div className="ShoppingCart">

            <h1 className="ShoppingCart-header">{ username }'s Shopping cart </h1>
            <div className="ShoppingCart-items">
                { items.map( i => (
                    <CartItems key={ i.id } items={ i.name } img={ i.img } price={ i.price } quantity={ i.quantity } />

                ) ) }
            </div>
            <b>Cart total:${ total }</b>
        </div>
    );
};

export default ShoppingCart; 