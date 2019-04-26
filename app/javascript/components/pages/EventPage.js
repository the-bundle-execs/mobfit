import React from "react"
import PropTypes from "prop-types"
import { Button, Navbar, Nav } from 'react-bootstrap'
import { allEvents, showEvent, createAttLog } from '../api'

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

        console.log(event_id);
        console.log(this.props.user.id);

        createAttLog(attributes)

        .catch((error) => {
          this.setState({ error })
        })



      }

      // <div class="alert alert-dismissible alert-success">
      // <button type="button" class="close" data-dismiss="alert">&times;</button>
      // <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.
      // </div>


  render () {
    const {user} = this.props
    return (
      <React.Fragment>

        <div className= "eventinfo">
          <h2>{this.state.event.event_name}</h2>

        </div>
        <h2>{user.username}</h2>
        <button type="button" onClick={this.att_log()} className="btn btn-outline-success">Sign up for this Event</button>


      </React.Fragment>
    );
  }
}
export default EventPage