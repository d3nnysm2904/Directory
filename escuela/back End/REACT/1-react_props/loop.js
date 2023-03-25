const TodoList = ( props ) =>
{
    // const todos = [];
    // for ( let t of props.todos )
    // {
    //     todos.push( <li>{ t }</li> );
    // }

    return (
        <div>
            <h4>Todo list</h4>
            <ul>
                { props.todos.map( t,idx =>

                ( <li key={idx}>
                    <input type="checkbox" />
                    <b>{ t }</b>
                </li> )

                ) }
            </ul>
        </div>

    );
};