import React, { useState } from 'react';

const TaskList = () =>
{
    const [ todos, setTodos ] = useState( [ 'carWash', 'clean' ] );
    const [ numTodos, setNumTodos ] = useState( 2 );

    return (
        <div>
            <p>You have { numTodos }  task to finsih</p>
        </div>
    );
};


export default TaskList;