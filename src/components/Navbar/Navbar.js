import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.css';
import NavOverlap from './NavOverlap';

class Navbar extends Component {
    render() {
        return (
            <div className={classes.Navbar}>
                <img className={classes.Logo} src={require('../../asset/Carousel/logo.png')} alt='Logo' />
                <ul>
                    <li className={classes.Navbar}><NavLink activeClassName={classes.active} to="/About">About</NavLink></li>
                    <li className={classes.Navbar}><NavLink activeClassName={classes.active} to="/Contact">Contact</NavLink></li>
                    <li className={classes.Navbar}><NavLink activeClassName={classes.active}  to="/Destination">Destination</NavLink></li>
                    <li className={classes.Navbar}><NavLink activeClassName={classes.active} to="/" exact>Home</NavLink></li>
                </ul>
                <NavOverlap />
            </div>

        );
    }
}

export default Navbar;