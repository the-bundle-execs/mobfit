import React from 'react'
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
        {hostedEvents.length === 0 &&
          <h4 key={user.id} style={{textAlign: 'center'}}>You Are Currently Not Hosting Any Events</h4>
        }
        {hostedEvents.length !== 0 &&
          <div>
            <h3 style={{textAlign: 'center'}}>Hosted Events</h3>
            <CardDeck>
              {hostedEvents.map(event => {
                return(
                  <div key={event.id}>
                    <Card className="card border-danger mb-3">
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
                          <br></br>
                          Attendance: {event.attendance_count}
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
          </div>
        }
      </React.Fragment>
    );
  }
}

export default HostedEvents
