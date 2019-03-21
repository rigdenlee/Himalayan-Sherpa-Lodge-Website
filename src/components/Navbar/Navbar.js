import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.css';

class Navbar extends Component {
    render() {
        return(
            <div className={classes.Navbar}>
                <ul>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/location">Destination</NavLink></li>
                    <li><NavLink to="/" exact>Home</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;