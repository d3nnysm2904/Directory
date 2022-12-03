// we can also make companents with opening trag and closing tags 

// {/* <Thing> </Thing>; */}
const Alert = ( props ) =>
{
    return (
        <div>
            🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
            {/* this renders the children inside App  */ }
            <span> { props.children }</span>
            🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

        </div>
    );
};
