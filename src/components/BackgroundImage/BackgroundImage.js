import React, { Component } from 'react';
import classes from './BackgroundImage.css';
import BookInput from '../BookInput/BookInput';

class BackgroundImage extends Component {
   render() {
     return (
       <div className={classes.image}>
        <img src={require('../../asset/Carousel/bg-01.jpg')} alt="" />
        {/* <div className={classes.homeBody}> */}
          {/* <p className={classes.Heading}>HIMALAYAN SHERPA LODGE</p> */}
          <BookInput />
        {/* </div> */}
       </div>
     );
   }
  }
  
  export default BackgroundImage;
  