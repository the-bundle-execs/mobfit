import React, { Component } from 'react'
import GoogleMap from 'google-map-react';

class Map extends React.Component {
  render() {
    const { lat, long } = this.props
    return (
      <div style={{width: '100%', height: '300px'}}>
      {lat && long &&
        <GoogleMap
          bootstrapURLKeys={{key: this.props.google_maps_api_key}}
          center={[parseFloat(lat), parseFloat(long)]}
          zoom={10}
        >
        </GoogleMap>
      }
      </div>
    )
  }
}
export default Map
