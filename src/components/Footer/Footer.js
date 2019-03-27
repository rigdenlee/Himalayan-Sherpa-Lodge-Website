import React, { Component } from 'react';
import classes from './Footer.css';

class Footer extends Component {
    render() {
        return(
            <div className={classes.footer}>
            <p className={classes.Heading}>SUBSCRIBE</p>
                <input type="email" placeholder="example@example.com" />
                <input type="button" value="submit" />
            </div>
        );
    }
}

export default Footer;