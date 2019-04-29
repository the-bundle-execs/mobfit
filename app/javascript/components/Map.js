import React, { Component } from 'react'
import GoogleMap from 'google-map-react';

class Map extends React.Component {
  render() {
    return (
      <div style={{width: '25%', height: '200px'}}>
        <GoogleMap
          bootstrapURLKeys='AIzaSyAsLfmEY7AvCvFx4nrsQVsQS0R1A9UAG9w'
          center={[32.7096298,-117.1602029]}
          zoom={12}
        >
        </GoogleMap>
      </div>
    )
  }
}
export default Map
