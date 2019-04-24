import React from "react"
import PropTypes from "prop-types"
import { CardDeck, Card, Button } from "react-bootstrap"

class HostedEvents extends React.Component {
  render () {
    const { events, user } = this.props
    return (
      <React.Fragment>
        <h1>Hosted Events</h1>
        <CardDeck>
          {events.map(event => {
            return(
              <div key={event.id}>
                {user.id == event.trainer_id &&
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
                      <Button variant="light">Edit Hosted Event</Button>
                    </Card.Footer>
                  </Card>
                }
              </div>
            )
          })}
        </CardDeck>
      </React.Fragment>
    );
  }
}

export default HostedEvents
