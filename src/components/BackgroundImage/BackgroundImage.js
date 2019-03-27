import React, { Component } from 'react';
import classes from './BackgroundImage.css';
import BookInput from '../BookInput/BookInput';
import Footer from '../Footer/Footer';


class BackgroundImage extends Component {
   render() {
     return (
       <div>
       <div className={classes.image}>
        <img src={require('../../asset/Carousel/bg-01.jpg')} alt="" />
        {/* <div className={classes.homeBody}> */}
          {/* <p className={classes.Heading}>HIMALAYAN SHERPA LODGE</p> */}
          <BookInput />
        {/* </div> */}
        {/* <Footer /> */}
       </div>

       <p class={classes.Heading}>Hear from someone who have been here</p>
        <div className={classes.container}>
          <div className={classes.commentHolder}>
            <div className={classes.comment}>
                <img className={classes.Img} src={require('../../asset/Comments/3.jpg')} alt='image not supported' />
                <p className={classes.para}>"This place is very nice. The Location is the most beautiful. Accomodation is the best thing among all above places before gurdum. Food is also very delicious. Camp leader & Kitchen staff was very co-operate. They welcome us with smily face we all are so Pleaseant with their hospitality."</p>
            </div>

            <div className={classes.comment}>
                <img className={classes.Img} src={require('../../asset/Comments/1.jpg')} alt='image not supported' />
                <p className={classes.para}>"So for now after Tumling and Sandakphu, this was the best place. This place gives you positive vibes. From the moment ou enter here, the food is the best and the best part is you will get what you want. Beautiful faces with beautiful smiles, lovely gesture and great atmosphere."</p>
            </div>

            <div className={classes.comment}>
                <img className={classes.Img} src={require('../../asset/Comments/2.jpg')} alt='image not supported' />
                <p className={classes.para}>"The place is so beautiful with a good food. Accomodation is also very comfy and nice. The camp leaders + the team is very good & very supportive. They also participated with us and joined the fun."</p>
            </div>
          </div>
          <Footer />
        </div>      
      </div>
     );
   }
  }
  
  export default BackgroundImage;
  