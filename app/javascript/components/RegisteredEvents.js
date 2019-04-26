import React from "react"
import PropTypes from "prop-types"
import { CardDeck, Card, Button } from "react-bootstrap"



class RegisteredEvents extends React.Component {
  render () {


    const { events, user } = this.props
    console.log(events);
    let registeredEvents = events.filter(event => {
      user.attendance_logs.id === event.attendance_logs.id

    });
    console.log(user);
    console.log(events);
    console.log(user.attendance_logs);
    console.log(event.attendance_logs);
    console.log(registeredEvents);
    return (
      <React.Fragment>
        <h1>Hosted Events</h1>
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
