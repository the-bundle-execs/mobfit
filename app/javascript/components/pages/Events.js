import React from "react"
import PropTypes from "prop-types"

import { allEvents, createEvent } from '../api'

import NewEvent from '../NewEvent'

class Events extends React.Component {
  constructor(props){
     super(props)
     this.state = {
       error: null,
       events: []
     }
   }

  componentWillMount = () => {
    this.showEvents()
	}

  showEvents = () => {
    allEvents()
    .then((events)=>{
      this.setState({ events })
    })
    .catch((error) => {
      this.setState({ error })
    })
  }

  newEvent = (newEventInfo) => {
  	createEvent(newEventInfo)
      .then(successEvent => {
        this.showEvents()
      })
      .catch((error) => {
        this.setState({ error })
      })
  }

  render () {
    const { events } = this.state
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
          < NewEvent addEvent={this.newEvent}/>
        </div>
      </React.Fragment>
    );
  }
}

export default Events
