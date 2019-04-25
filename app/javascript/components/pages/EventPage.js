import React from "react"
import PropTypes from "prop-types"
import { Button, Navbar, Nav } from 'react-bootstrap'
import { allEvents, showEvent} from '../api'

class EventPage extends React.Component {
  constructor(props){
     super(props)
     const{ match } = props
     this.state = {
       event: '',
       events:[],
       error: null,
       eventId: match.params.id
     }
   }



   componentWillMount = () => {
     const {eventId} = this.state
     console.log(eventId);

     showEvent(eventId)

     .then((event)=>{
       console.log(event);
       this.setState({ event })
     })

     .catch((error) => {
       this.setState({ error })
     })

   }

   componentDidUpdate(prevProps){
     const {eventId} = this.state
	    const prevMatch = prevProps.match
	    const{ match } = this.props
	    if(match.params.id != prevMatch.params.id){

        console.log(match.params.id);


        showEvent(match.params.id)

        .then((event)=>{

          this.setState({ event })
        })

        .catch((error) => {
          this.setState({ error })
        })
      }
      }



  render () {

    return (
      <React.Fragment>

        <div>
        <h1>{this.state.event.event_name}</h1>
        </div>



      </React.Fragment>
    );
  }
}
export default EventPage
