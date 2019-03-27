import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
// import Footer from '../../components/Footer/Footer';

class About extends Component {
    state={
        show: false
    }

    showMore = () => {
       let newShow = !this.state.show;
       this.setState({
           show: newShow
       }); 
    }
   
    render() {
        let readMore = '';
        if(this.state.show === true) {
            readMore = ( 
            <span>The most regreshing experience of Gurdumis the place itself,the awesome inspiring beauty of the mountains, the green of the pines, the fresh air, the song of the chirping birds and flowing rivers all add charm to the mountains, the green of the pines, the fresh air, the song of the chirping birds and flowing rivers all add charm to the this heavenly place. Also you can plan for small treks like " into the wild" trek through the forests to see the breathtaking view of the Kanchenjungha or the river trek to the Srikhola by the shades of the trees. With the unique accommodation targeted to make your experience worth remembering, you have the choice to the live in a outdoor tents. Light up the night with music, food before a warm crakkling fire. Gurdum is a very light budget travel. </span>
            );
        }
        return(
            <div className="About">
                <Jumbotron>
                    <h1 className="display-3">About</h1>
                    <p className="lead">Gurdum, a small village in the lap of the mountains, is the palce where you were dreaming to escape this coming short holidays. Whether you have a short trek in yourmind or just a peacefully escape to nature Gurdum welcomes you to experience the beauty of the mountains in it's purest form.Within the Singalila national park Gurdum is a place where one can have ocean of clouds at their feet and smell of the green all around. Also the people of Gurdum, their simplicityand care and value to this place.  {readMore} </p>
                    {/* <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                    <Button color="primary">Learn More</Button>
                    </p> */}
                     <Button color="primary" onClick={this.showMore}>{ this.state.show ? 'Read Less': 'Read More'}</Button>
                </Jumbotron>
            </div>
        );
    }
}

export default About;

