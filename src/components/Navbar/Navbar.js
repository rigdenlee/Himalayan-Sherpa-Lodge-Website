import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.css';

class Navbar extends Component {
    render() {
        return(
            <div className={classes.Navbar}>
            <img className={classes.Logo} src={require('../../asset/Carousel/logo.png')} alt='Logo' />
                <ul>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                    <li><NavLink to="/Destination">Destination</NavLink></li>
                    <li><NavLink to="/" exact>Home</NavLink></li>
                </ul>    
            </div>
        );
    }
}

export default Navbar;