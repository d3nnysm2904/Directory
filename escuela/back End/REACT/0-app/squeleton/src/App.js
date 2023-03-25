import React from 'react';
import './App.css';
import NavBar from './hooks/NavBar';
import UserForm from './hooks/UserForm';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App ()
{
  return (
    <div className="App">

      <BrowserRouter>

        {/* <NavBar /> */ }
        <UserForm />

      </BrowserRouter>

    </div>
  );
}

export default App;
