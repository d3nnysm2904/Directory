import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShoppingList from './shoppingList';

it( 'renders without crashing ', () =>
{
    render( <ShoppingList /> );
} );

it( 'it matches snapshot ', () =>
{
    const { asFragment } = render( <ShoppingList /> );
    expect( asFragment() ).toMatchSnapShot();
} );

it( 'should add new item ', () =>
{
    const { queryByText, getByLabelText } = render( <ShoppingList /> );
    const input = getByLabelText( 'Product' );
    const btn = queryByText( 'Add item' );
    expect( queryByText( 'Product Name:Chocolate Milk' ) ).not.toBeInTheDocument();
    fireEvent.change( input, { target: { value: 'Chocolate Milk' } } );
    fireEvent.click( btn );
    expect( queryByText( 'Product Name:Chocolate Milk' ) ).toBeInTheDocument();
} );