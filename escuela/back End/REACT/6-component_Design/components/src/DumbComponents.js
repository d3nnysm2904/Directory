import React from 'react';

const Todos = ( props ) =>
{
    // Example of dumb component
    // simple and dont have state
    return (
        <div className='Todos'>
            { props.task }
        </div >
    );
};

const TodoList = () =>
// ... missing data (is a example )
{
    return (
        <div>
            <Todos task={ task[ 0 ] } />
            <Todos task={ task[ 1 ] } />
            <Todos task={ task[ 2 ] } />
        </div>
    );
};