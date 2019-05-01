import React from "react"
import PropTypes from "prop-types"
import { Button, Navbar, Nav } from 'react-bootstrap'
import { allEvents, showEvent, createAttLog, deleteAttLog } from '../api'

class EventPage extends React.Component {
  constructor(props){
     super(props)
     const{ match } = props
     this.state = {
       event: '',
       events:[],
       error: null,
       event_id: match.params.id,
       att_log_save: false
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
          console.log(event);
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
        // console.log(event_id);
        // console.log(this.props.user.id);
        createAttLog(attributes)

        // .then((att_log_save) =>{
        //   this.setstate({att_log_save: true})
        //           console.log(att_log_save);
        // })

        .catch((error) => {
          this.setState({ error })
        })
      }


      removeAttLog = () => {
      const {event} = this.state
        deleteAttLog(event.id)

      }



  render () {
    const {user} = this.props

    return (
      <React.Fragment>
        <div className= "eventinfo">
          <h2>{this.state.event.event_name}</h2>
          <ul>
            <h5>Date: {this.state.event.date}</h5>
            <h5>Time: {this.state.event.time}</h5>
            <h5>Duration: {this.state.event.duration}</h5>
            <h5>Location: {this.state.event.location_name}</h5>
            <h5>Activity: {this.state.event.activity}</h5>
            <h5>Intensity: {this.state.event.level}</h5>
            <h5>Enrolled: {this.state.event.max_enrollment}</h5>
            <h5>You will need: {this.state.event.equipment}</h5>
            <h5>Additional info: {this.state.event.comments}</h5>
          </ul>
        </div>
        {user.is_attending &&
          <button type="button" onClick={this.removeAttLog} className="btn btn-outline-danger">Cancel registration for this Event</button>
        }
        {!user.is_attending &&
          <button type="button" onClick={this.att_log} className="btn btn-outline-success">Sign up for this Event</button>
        }
        <button type="button" onClick={this.removeAttLog} className="btn btn-outline-danger">Cancel registration for this Event</button>

      </React.Fragment>
    );
  }
}
export default EventPage
