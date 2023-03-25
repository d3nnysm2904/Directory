import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

// terminal npm test Counter.test.js
test( 'testing App', () =>
{
    render( <Counter /> );
} );


test( 'playing with queries', () =>
{
    const { getAllByText, getByPlaceHolderText, getByLabelText } = render( <Counter /> );
    console.log( getAllByText( "count", { exact: false } ) );
    // excat = to false is that i dont care is a excat match 
    console.log( getByPlaceHolderText( "username" ) );
    console.log( getByLabelText( "username" ) );
} );

test( 'button clicks ', () =>
{
    const { getByText, debug } = render( <span> <Counter /></span> );
    debug();
    const h2 = getByText( 'Current count: 0' );
    const btn = getByText( 'Add' );
    fireEvent.click( btn );
    expect( h2 ).toHaveTextContent( '1' );
    expect( h2 ).not.toHaveTextContent( '0' );
} );