import React, {Component} from 'react'
import classes from './Destination.css';
// import Footer from '../../components/Footer/Footer';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 
export class MapContainer extends Component {
  render() {
    return (
        <div>
          <p className={classes.Title}>Google Map Location</p>
        <Map google={this.props.google} style={{width: '70%', height: '70%', position: 'absolute', border: '2px solid black', top: '15%', left: '15%'}} initialCenter={{
            lat: 27.121296,
            lng: 88.056823
          }} zoom={14}>
    
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
    
            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                <h1>LOL</h1>
                </div>
            </InfoWindow>
        </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyC1J_62JceH1fqNQm0jqfyibg6Gsj5YwPs')
})(MapContainer)