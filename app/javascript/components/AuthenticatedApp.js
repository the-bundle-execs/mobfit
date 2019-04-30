import React from "react"
import PropTypes from "prop-types"

import { allEvents, createEvent, updateEvent, deleteEvent, getAttLogs } from './api'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import RegisteredEvents from './RegisteredEvents'
import Events from './pages/Events'
import NewEvent from './pages/NewEvent'
import HostedEvents from './HostedEvents'
import Footer from './Footer'
import NavAuth from './NavAuth'

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

  editEvent = (id) => {
  	updateEvent(id)
      .then(updatedEvent => {
        this.showEvents()
      })
      .catch((error) => {
        this.setState({ error })
      })
  }

  removeEvent = (id) => {
    deleteEvent(id)
    .then(event => {
      this.showEvents()
    })
  }


  showAttLogs = () =>{
    getAttLogs()
    .then((attendance_logs)=>{
      console.log(attendance_logs);
      this.setState({ attendance_logs })
    })
    .catch((error) => {
      this.setState({ error })
    })
  }



  render () {
    let { events, show, attendance_logs } = this.state
    let { current_user } = this.props
    return (
      <React.Fragment>
        <Router>
          <NavAuth />
          {current_user.is_trainer &&
            <div>
              <h1 >Welcome {current_user.username}!</h1>
              
              < HostedEvents
                events={events}
                user={current_user}
                removeEvent={this.removeEvent}
                editEvent={this.editEvent}
              />
              < NewEvent
                addEvent={this.newEvent}
                show={show}
                onHide={() => this.setState({ show: false })} user={current_user} />
              < Events events={events} user={current_user} />
            </div>
          }

          {!current_user.is_trainer &&
            <div>
              <h1>Hello {current_user.username}!</h1>
              < RegisteredEvents events={events} user={current_user} attendance_logs={attendance_logs} />
              < Events events={events} user={current_user} />
            </div>
          }
          </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default AuthenticatedApp
