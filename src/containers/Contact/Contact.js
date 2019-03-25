import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import classes from './Contact.css';


class Contact extends Component {
    render() {
        return(
            <div className={classes.Contact}>
                    <SocialIcon className={classes.Icons} url="http://facebook.com/jaketrent" />
                    <SocialIcon className={classes.Icons} url="http://instagram.com/jaketrent" />
                    <SocialIcon className={classes.Icons} url="http://twitter.com/jaketrent" />
            </div>
        );
    }
}

export default Contact;