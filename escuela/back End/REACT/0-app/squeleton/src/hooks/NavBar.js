import React from "react";
import "./css/NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar ()
{
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Home
        </NavLink>


        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/snacks">Log In </NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/drinks">Sign Up</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/form">Other</NavLink>
          </NavItem>
        </Nav>
      </Navbar>

    </div>
  );
}

export default NavBar;
