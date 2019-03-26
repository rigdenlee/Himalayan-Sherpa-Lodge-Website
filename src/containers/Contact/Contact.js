import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import classes from './Contact.css';

class Contact extends Component {
    render() {
        let style={
            display: 'inline-block',
            width: '100px',
            height: '100px',
            position: 'relative',
            overflow: 'hidden',
            top: '100px'
        }
        return(
            <div className={classes.Contact}>
                    <SocialIcon style={style} className={classes.fb} url="http://facebook.com/jaketrent" />
                    <SocialIcon style={style} className={classes.insta} url="http://instagram.com/jaketrent" />
                    <SocialIcon style={style} className={classes.twi} url="http://twitter.com/jaketrent" />
                    
            </div>
        );
    }
}

export default Contact;
