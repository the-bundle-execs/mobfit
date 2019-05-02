import React from 'react'
import PropTypes from "prop-types"
import {allEvents, createEvent, updateEvent, deleteEvent, getAttLogs, deleteAttLog} from './api'
import RegisteredEvents from './RegisteredEvents'
import Events from './pages/Events'
import NewEvent from './pages/NewEvent'
import HostedEvents from './HostedEvents'
import Footer from './Footer'
import NavAuth from './NavAuth'
import Header from './Header'

class AuthenticatedApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      error: null,
      events: [],
      attendance_logs: []
    }
  }

  componentDidMount = () => {
    this.showEvents()
    this.showAttLogs()
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

  editEvent = (id, update) => {
  	updateEvent(id, update)
    .then(updatedEvent => {
      this.showEvents()
    })
    .catch((error) => {
      this.setState({ error })
    })
  }

  removeEvent = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      deleteEvent(id)
      .then(event => {
        this.showEvents()
      })
    }
  }

  showAttLogs = () =>{
    getAttLogs()
    .then((attendance_logs)=>{
      this.setState({ attendance_logs })
    })
    .catch((error) => {
      this.setState({ error })
    })
  }

  removeAttLog = (id) => {
    deleteAttLog(id)
      .then((event)=>{
      this.showEvents()
      })
    alert("You are no longer registered for this event!")
  }

  render () {
    let { events, show, attendance_logs} = this.state
    let { google_maps_api_key, current_user } = this.props
    return (
      <React.Fragment>
        < NavAuth />
        < Header user={current_user} />
        {current_user.is_trainer &&
          <div>
            < HostedEvents
              events={events}
              user={current_user}
              removeEvent={this.removeEvent}
              editEvent={this.editEvent}
            /><br/>
            < NewEvent
              addEvent={this.newEvent}
              show={show}
              onHide={() => this.setState({ show: false })} user={current_user}
            /><br/>
            < RegisteredEvents
              removeAttLog={this.removeAttLog}
              events={events}
              user={current_user}
              attendance_logs={attendance_logs}
              google_maps_api_key={google_maps_api_key}
            /><br/>
            < Events
              events={events}
              user={current_user}
              google_maps_api_key={google_maps_api_key}
              showEvents={this.showEvents}
            />
          </div>
        }

        {!current_user.is_trainer &&
          <div>
            < RegisteredEvents
              removeAttLog={this.removeAttLog}
              events={events}
              user={current_user}
              attendance_logs={attendance_logs}
              google_maps_api_key={google_maps_api_key}
            /><br/>
            < Events
              events={events}
              user={current_user}
              google_maps_api_key={google_maps_api_key}
              showEvents={this.showEvents}
            />
          </div>
        }
        < Footer />
      </React.Fragment>
    );
  }
}

export default AuthenticatedApp
