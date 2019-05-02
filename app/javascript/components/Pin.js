import React from 'react'
import { FaMapPin } from 'react-icons/fa'

const PinStyle = {
  fontSize: '24px',
  color: '#631AAC'
}

class Pin extends React.Component {
  render() {
    return (
      <div>
        < FaMapPin style={PinStyle} />
      </div>
    )
  }
}
export default Pin
