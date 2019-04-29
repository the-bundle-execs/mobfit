import React, { Component } from 'react'
import GoogleMap from 'google-map-react';

class Map extends React.Component {
  render() {
    return (
      <div style={{width: '100%', height: '300px'}}>
        <GoogleMap
          bootstrapURLKeys={{key: this.props.google_maps_api_key}}
          center={[32.7096298,-117.1602029]}
          zoom={12}
        >
        </GoogleMap>
      </div>
    )
  }
}
export default Map
