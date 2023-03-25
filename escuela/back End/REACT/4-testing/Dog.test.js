import React from 'react';
import { render } from '@testing-library/react';
import Dog from './Dog';

it( 'should render', () =>
{
    render( <Dog name="king" isAdopted={ true } /> );
} );

it( 'should match snapshot', () =>
{
    const { asFragment } = render( <Dog name='Rocky' isAdopted={ true } /> );
    expect( asFragment() ).toMatchSnapshot;
} );

it( 'should match snapshot', () =>
{
    const { asFragment } = render( <Dog name='Yuma' isAdopted={ false } /> );
    expect( asFragment() ).toMatchSnapshot;
} );