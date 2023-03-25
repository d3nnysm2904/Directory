import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Toggler from './Toggler';

it( 'should show h1', () =>
{
    const { getByText } = render( <Toggler /> );
    const heading = getByText( 'Hello World' );
    expect( heading ).toHaveClass( 'Toggler-text' );
    expect( heading ).toBeInDocument();
    fireEvent.click( getByText( 'Toggle' ) );
    expect( heading ).not.toBeInDocument();
} );