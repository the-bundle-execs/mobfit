import React from "react"
import PropTypes from "prop-types"
import { CardDeck, Card, Button } from "react-bootstrap"




class RegisteredEvents extends React.Component {



  render () {
    const { events, user, attendance_logs } = this.props

    console.log(user);
    console.log(events);
    console.log('attendance_logs', attendance_logs);
    const registeredEvents = events.filter(event => event.is_attending);
    console.log("registeredEvents", registeredEvents);
    return (
      <React.Fragment>
        <h1>Registered Events</h1>
        {registeredEvents.length === 0 &&
          <h4 key={user.id}>You are not registered for any events.</h4>
        }
        <CardDeck>
          {registeredEvents.map(event => {
            return(
              <div key={event.id}>
                <Card className="text-white bg-primary mb-3">
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
      </React.Fragment>
    );
  }
}

export default RegisteredEvents
