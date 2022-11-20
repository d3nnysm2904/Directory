const App = () =>
{
    return (
        <div>
            <Shiba />
            <German />
            <Shiba />
        </div>
    );
};

// calling react.dom 
// we pass a component first ,usually called "App" , the second argument is a destination where we want the element 
// syntax
// name of component , in this case Shiba , and needs to be wrapedd around html like braces   and the closing / needs to be there 
ReactDOM.render( <App />, document.getElementById( "root" ) );

// we need to add a script in html in order for this to work 