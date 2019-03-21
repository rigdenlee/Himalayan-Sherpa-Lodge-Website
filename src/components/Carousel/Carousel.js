import React, { Component } from 'react';
import classes from './Carousel.css';

class ControlledCarousel extends Component {
   render() {
     return (
       <div className={classes.image}>
         <img src={require('../../asset/Carousel/background.JPG')} />
         <h1>Welcome to Himalayan Sherpa Lodge</h1>
         <div className={classes.form}>
          <form>
            <input type="text" placeholder="Your Name" />
            <select>
              <option>Family Room</option>
              <option>Bachelor Room</option>
              <option>Couple Room</option>
            </select>
          </form>
         </div>
       </div>
     );
   }
  }
  
  export default ControlledCarousel;
  