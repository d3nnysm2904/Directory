// Every key should be a unique value 
// Best way :use strings that uniquely identifies items among siblings.
// Mostt often you would use IDs from your data keys 


// Todos maybe comig from a database with id 
let todoItems = todos.map( todo =>
    <li key={ todo.id } >{ todo.text }</li> );


    // When you dont have stable ids for rendered items, you may use the iteration index as key as a last resort 


    // Look up uuid

    // npm install uuid