import React from 'react'
import PropTypes from "prop-types"
import { CardDeck, Card, Button } from "react-bootstrap"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import EventPage from './pages/EventPage'
import {deleteAttLog} from './api'

class RegisteredEvents extends React.Component {


  render () {
    const { events, user, attendance_logs, google_maps_api_key } = this.props
    const registeredEvents = events.filter(event => event.is_attending);
    return (
      <React.Fragment>
      <div>
      <Router>
        <h1>Registered Events</h1>
        {registeredEvents.length === 0 &&
          <h4 key={user.id}>You are not registered for any events.</h4>
        }
        <CardDeck>
          {registeredEvents.map(event => {
            return(
              <div key={event.id}>
                <Card className="card border-primary mb-3">
                  <Card.Body>
                    <Card.Title>{event.event_name}</Card.Title>
                    <Card.Text>
                      Where: {event.location_name}
                      <br></br>
                      What: {event.activity}
                      <br></br>
                      When:{event.date}
                      <br></br>
                      Time: {event.time}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                  </Card.Footer>
                </Card>
              </div>
            )
          })}
        </CardDeck>
        </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisteredEvents
