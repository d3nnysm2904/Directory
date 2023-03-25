import React from "react";
import ShoppingCart from "./shoppingCart";
import Alert from './alert';
import Greetings from './fragment';
import items from "./items";
import moreItems from "./moreItems";
import logo from "./logo.svg";

// import logo from './logo.svg';
// import { sum, substract } from './helpers';
// import data, { meow } from './cats';
import './App.css';
function App ()
{

  return (
    <div>
      <Greetings />
      <Alert variant='success' >
        <hi> Welcome back</hi>
      </Alert>
      <Alert variant='danger' >
        <hi> Oh no </hi>
      </Alert>
      <Alert variant='warning' >
        <hi> Warning </hi>
      </Alert>
      <img src={ logo } id="logo" alt="" />
      <ShoppingCart items={ items } username="Denny" />
      <ShoppingCart items={ moreItems } username="Yaki" />
    </div > );
}

export default App;;
