import React from 'react';
import logo from '../../../ladle.png';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.module.css';
import classes from './NavBar.module.css';

export default function NavBar () {
 
  return (
    <Navbar className="navbar mb-4" fixed="top" expand="sm">
      <img width="50px" height="50px" src={logo} alt="Logo" />
      <NavLink className={classes.title} to="/">Mandji4ka</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
            <div className={classes.buttonContainer}>
              <Link className={classes.feeds} to="/">Feeds</Link>
              <Link className={classes.feeds} to="/drinks">Drinks</Link>
            </div>
          <Nav className="mr-auto" />
            <div className={classes.buttonContainer}>
              <Link className={classes.login} to="/login">Login</Link>
              <Link className={classes.register} to="/register">Register</Link>
            </div>
      </Navbar.Collapse>
    </Navbar>
  );
};
