const App = () =>
(
    <div>
        <RandomNumRange />
        <Alert >
            <RandomChoice choices={ [ 'red', 'green', 'blue' ] } />
            <Animal name="Stevie" species="Chicken" emoji="🐔" age={ 3 } IsCute={ false } />
            <Animal name="King" species="Dog" emoji="🐶" IsCute={ true } />
        </Alert >


        <Bouncer age={ 20 } />
        <Bouncer age={ 11 } />
        <Bouncer age={ 22 } />
        <TodoList todos={ [ 'laundry', 'cook', 'do nothing' ] } />
    </div>
);


ReactDOM.render( <App />, document.getElementById( "root" ) );