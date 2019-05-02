import React from 'react'
import GoogleMap from 'google-map-react';

import Pin from './Pin'

class Map extends React.Component {
  render() {
    const { lat, long, location, google_maps_api_key } = this.props
    return (
      <div style={{width: '100%', height: '300px'}}>
      {lat && long &&
        <GoogleMap
          bootstrapURLKeys={{key: google_maps_api_key}}
          center={[parseFloat(lat), parseFloat(long)]}
          zoom={12}
        >
        < Pin
          lat={lat}
          lng={long}
          location={location}
        />
        </GoogleMap>
      }
      </div>
    )
  }
}
export default Map
