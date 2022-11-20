const App = () =>
(
    <div>
        <Animal name="Stevie" species="Chicken" emoji="🐔" age={ 3 } IsCute={ false } />
        <Animal name="King" species="Dog" emoji="🐶" IsCute={ true } />
        <RandomChoice choices={ [ 'red', 'green', 'blue' ] } />

    </div>
);


ReactDOM.render( <App />, document.getElementById( "root" ) );