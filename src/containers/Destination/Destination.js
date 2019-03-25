import React, {Component} from 'react'

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 
export class MapContainer extends Component {
  render() {
    return (
        <div>
        <Map google={this.props.google} zoom={14}>
    
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