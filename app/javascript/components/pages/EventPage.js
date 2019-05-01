import React from 'react'
import PropTypes from "prop-types"
import { Button, Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import { allEvents, showEvent, createAttLog, deleteAttLog } from '../api'
import Map from '../Map'


class EventPage extends React.Component {
  constructor(props){
     super(props)
     const{ match } = props
     this.state = {
       event: '',
       events:[],
       error: null,
       event_id: match.params.id,
     }
   }

   componentWillMount = () => {
     const {event_id} = this.state
     showEvent(event_id)
     .then((event)=>{
       this.setState({ event })
     })
     .catch((error) => {
       this.setState({ error })
     })
   }

   componentDidUpdate = (prevProps) => {
     const {event_id} = this.state
	    const prevMatch = prevProps.match
	    const{ match } = this.props
	    if(match.params.id != prevMatch.params.id){
        showEvent(match.params.id)
        .then((event)=>{
          this.setState({ event })
          this.setState({event_id: match.params.id})
        })
        .catch((error) => {
          this.setState({ error })
        })
      }
    }

      att_log = (newattlog) => {
        const {user} = this.props
        const {event_id} = this.state
        const {user_id} = user.id
        let attributes = {event_id: event_id, user_id: user_id}

        createAttLog(attributes)

        .catch((error) => {
          this.setState({ error })
        })
      }


      removeAttLog = () => {
      const {event} = this.state
        deleteAttLog(event.id)

      }



  render () {
    const { user, google_maps_api_key } = this.props
    const { event } = this.state
    return (
      <React.Fragment>
        <Container>
          <Row className="show-grid">
            <Col xs={9} md={6}>
              <h2>{event.event_name}</h2>
              <ul>
                <h5>Date: {event.date}</h5>
                <h5>Time: {event.time}</h5>
                <h5>Duration: {event.duration}</h5>
                <h5>Location: {event.location_name}</h5>
                <h5>Activity: {event.activity}</h5>
                <h5>Intensity: {event.level}</h5>
                <h5>Enrollment Limit: {event.max_enrollment}</h5>
                <h5>Please Bring: {event.equipment}</h5>
                <h5>Additional info: {event.comments}</h5>
              </ul>
              <button type="button" onClick={this.att_log} className="btn btn-outline-success">Sign up for this Event</button>
              {user.is_attending &&
                <button type="button" onClick={this.removeAttLog} className="btn btn-outline-danger">Cancel registration for this Event</button>
              }
              {!user.is_attending &&
                <button type="button" onClick={this.att_log} className="btn btn-outline-success">Sign up for this Event</button>
              }
              <button type="button" onClick={this.removeAttLog} className="btn btn-outline-danger">Cancel registration for this Event</button>

            </Col>
            <Col xs={9} md={6}>
              < Map
                google_maps_api_key={google_maps_api_key}
                lat={event.loc_latitude}
                long={event.loc_longitude}
                location={event.location_name}
              />
            </Col>
          </Row><br />
        </Container>
      </React.Fragment>
    );
  }
}
export default EventPage
