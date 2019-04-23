import React from "react"
import PropTypes from "prop-types"

class Events extends React.Component {
  render () {
    const { events } = this.props
    return (
      <React.Fragment>
        <div>
          <h1>Events</h1>
          {events.map(evt =>{
            return(
              <ul key={evt.id}>
                <li>
                {evt.event_name}<br></br>{evt.location_name}<br></br>{evt.activity}<br></br>{evt.date}<br></br>{evt.time}
                </li>
              </ul>
          )})}
        </div>
      </React.Fragment>
    );
  }
}

export default Events
