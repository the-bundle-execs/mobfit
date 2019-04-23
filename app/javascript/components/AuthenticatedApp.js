import React from "react"
import PropTypes from "prop-types"

import { allEvents, createEvent } from './api'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Events from './pages/Events'
import NewEvent from './pages/NewEvent'

class AuthenticatedApp extends React.Component {
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
    let { events } = this.state
    let { current_user } = this.props
    return (
      <React.Fragment>
        <Router>
          {current_user.is_trainer &&
            <div>
              <h1>Hello {this.props.current_user.username}!</h1>
              <Link to="/NewEvent">Create New Event</Link>
            </div>
          }

          {!current_user.is_trainer &&
            <h1>Hello {this.props.current_user.username}!</h1>
          }

        < Events events={events} />
        <NewEvent addEvent={this.newEvent} user={current_user.id}/>

        <a rel="nofollow" data-method="delete" href="/users/sign_out">Logout</a>
        </Router>
      </React.Fragment>
    );
  }
}

export default AuthenticatedApp
