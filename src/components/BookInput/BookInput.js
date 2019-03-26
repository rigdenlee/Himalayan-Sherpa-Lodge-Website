import React, { Component } from 'react';
import classes from './BookInput.css';


class BookInput extends Component {
    render() {
        return(
            <div className={classes.FormContainer}>
                {/* <img  className={classes.BookInput} src={require('../../asset/Carousel/box-border.svg')} alt="Box Border" /> */}
                <form className={classes.BookForm}>
                <p className={classes.Heading}>HIMALAYAN SHERPA HOMESTAY</p>
                    <label className={classes.BookLabel}>BOOK</label>
                    <input type='date' placeholder='From' />
                    <input className={classes.Input} type='date' placeholder='To' /><br />
                    <input type='button' value='CHECK' />                 
                </form>
            </div>
        );
    }
}

export default BookInput;