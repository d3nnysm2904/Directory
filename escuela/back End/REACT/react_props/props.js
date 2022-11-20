// Properties aka props

// a usefyul component and a reusable one 
// This often means making it configurable or costumizable 
// Props are inmutable , we cannot changed them 
// props can be strings 
// for other types , embed js expresson using the curly braces {}

const Animal = ( props ) =>
(
    <div>
        <h1> Emoji:{ props.emoji }</h1>
        <h3> Name:{ props.name }</h3>
        <h3> Species:{ props.species }</h3>
        <h3> Is Cute ?:{ props.IsCute ? '👌' : '👎' }</h3>
    </div>
);

// Using the components 