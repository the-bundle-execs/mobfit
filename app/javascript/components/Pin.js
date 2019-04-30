import React from 'react'

class Pin extends React.Component {
  render() {
    const { lat, lng, title } = this.props
    return (
      <div>
        <p>{title}</p>
      </div>
    )
  }
}
export default Pin
