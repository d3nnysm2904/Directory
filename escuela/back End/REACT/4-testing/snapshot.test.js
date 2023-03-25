import React from 'react';
import { render, screen } from '@testing-library/react';
import Snapshot from './snapshot';

// smoketest

it( 'renders without crashing', function ()
{
    render( <Snapshot /> );
} );


// Snapshot test 
it( 'matches snapshots', function ()
{
    const { asFragment } = render( <Snapshot /> );
    expect( asFragment() ).toMatchSnapshot();
} );