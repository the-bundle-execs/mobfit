import React from "react"
import PropTypes from "prop-types"
import { CardDeck, Card, Button } from "react-bootstrap"

import EditEvent from './pages/EditEvent'
import Map from './Map'

class HostedEvents extends React.Component {
  render () {
    const { events, user } = this.props
    let hostedEvents = events.filter(event => {
      return user.id === event.trainer_id
    });

    return (
      <React.Fragment>
        <h1>Hosted Events</h1>
        {hostedEvents.length === 0 &&
          <h4 key={user.id}>You are not scheduled to host any events.</h4>
        }
        <CardDeck>
          {hostedEvents.map(event => {
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
                    < EditEvent
                      removeEvent={this.props.removeEvent}
                      editEvent={this.props.editEvent}
                      user={user}
                      event={event}
                    />
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

export default HostedEvents
