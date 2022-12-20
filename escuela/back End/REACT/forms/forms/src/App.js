import React from 'react';
import './App.css';
import Form from './form';
import SimpleForm from './simpleForm';
import ShoppingList from './shoppingList';

function App ()
{
  return (
    <div className="App">
      <SimpleForm />
      <Form />
      <ShoppingList />
    </div>
  );
}

export default App;
