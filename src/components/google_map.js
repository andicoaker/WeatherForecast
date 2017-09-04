import React, { Component } from 'react';

// ref is a direct reference, can use this.refs.map to refer back to the map component
class GoogleMap extends Component {

  // this.refs.map is where the map will appear on the screen
  componentDidMount (){
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render(){
    return <div ref="map" />;
  }
}

export default GoogleMap;
