import React from "react"
import PropTypes from "prop-types"
import { CardDeck, Card, Button } from "react-bootstrap"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import EventPage from './EventPage'

class Events extends React.Component {
  render () {
    const { events } = this.props
    return (
      <React.Fragment>
      <Router>
        <div>
          <h1>Other Events in the area:</h1>
          <CardDeck>
          {events.map((evt, index) =>{
            return(
              <Card key={index} className="text-white bg-primary mb-3">
                <Card.Body>
                  <Card.Title>{evt.event_name}</Card.Title>
                  <Card.Text>
                    Where: {evt.location_name}
                    <br></br>
                    What: {evt.activity}
                    <br></br>
                    When:{evt.date}
                    <br></br>
                    Time: {evt.time}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Link to={`/event/${evt.id}`}><button
                  type="button" className="btn btn-outline-secondary">More Info</button></Link>

                </Card.Footer>
              </Card>
          )})}
          </CardDeck>
          <Route path="/event/:id" component={EventPage} />
        </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default Events
