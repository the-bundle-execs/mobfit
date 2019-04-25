import React from "react"
import PropTypes from "prop-types"
import { Button } from 'react-bootstrap'

import { allEvents, createEvent } from './api'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Events from './pages/Events'
import NewEvent from './pages/NewEvent'
import HostedEvents from './HostedEvents'

class AuthenticatedApp extends React.Component {
  constructor(props){
     super(props)
     this.state = {
       error: null,
       events: [],
       show: false
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
    let { events, show } = this.state
    let { current_user } = this.props
    return (
      <React.Fragment>
        <Router>
          {current_user.is_trainer &&
            <div>
              <h1>Hello {current_user.username}!</h1>
              < HostedEvents
                events={events}
                user={current_user}
              />
              <Button
                onClick={() => this.setState({ show: true })}
                variant="btn btn-primary btn-lg btn-block">
                Create New Event
              </Button>
              < NewEvent
                addEvent={this.newEvent}
                show={show}
                onHide={() => this.setState({ show: false })} user={current_user} />
              < Events events={events} />
            </div>
          }

          {!current_user.is_trainer &&
            <div>
              <h1>Hello {current_user.username}!</h1>
              < Events events={events} />
            </div>
          }
          <a rel="nofollow" data-method="delete" href="/users/sign_out">Logout</a>
        </Router>
      </React.Fragment>
    );
  }
}

export default AuthenticatedApp
