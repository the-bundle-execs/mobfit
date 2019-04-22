import React from "react"
import PropTypes from "prop-types"
import { allEvents } from "./api"
// import {
//     BrowserRouter as Router,
//     Route,
//     Switch,
//   } from 'react-router-dom'
//
//   import Events from './pages/Events'

class AuthenticatedApp extends React.Component {
  constructor(props){
     super(props)
     this.state = {
       error: null,
       events: [],
     }
     this.getEvents()
   }

   getEvents = ()=>{
     allEvents()
     .then((events)=>{
       console.log('events', events);
       this.setState({ events })
     })
     .catch((error) => {
       this.setState({
         error
       })
     })


   }

  render () {
    return (
      <React.Fragment>
      <div>
            <h1>Events</h1>
            {this.state.events.map((evt, index) =>{
              return(
              <ul>
              <li key={index}>
              {evt.event_name}<br></br>{evt.location_name}<br></br>{evt.activity}<br></br>{evt.level}
              </li>
              </ul>
            )})}
            </div>

      </React.Fragment>
    );
  }
}

export default AuthenticatedApp
