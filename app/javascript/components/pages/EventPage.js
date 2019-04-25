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
          <Navbar variant="navbar navbar-expand-lg navbar-dark bg-primary">
          <Navbar.Brand href="#home">MobFit</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          </Navbar>;

        <div>
        <h1>This is the {this.state.event.event_name} Page</h1>
        </div>



      </React.Fragment>
    );
  }
}
export default EventPage
