import React from "react"
import PropTypes from "prop-types"
import Events from './pages/Events'
import CarouselSection from './CarouselSection'
import { Button, Navbar, Nav, Jumbotron } from 'react-bootstrap'
import Logo from './images/mobfit.png'
import Footer from './Footer'
import NavUnauth from './NavUnauth'

import { allEvents} from './api'

import { Route, NavLink, HashRouter, Router} from "react-router-dom";

import AboutUs from "./pages/AboutUs";



class UnauthenticatedApp extends React.Component {
  constructor(props){
     super(props)
     this.state = {
       error: null,
       events: []
     }
   }

   componentWillMount = () => {
     this.showEvents()
   }

   showEvents = () => {
     allEvents()
     .then((events)=>{
       this.setState({ events })
     })
     .catch((error) => {
       this.setState({ error })
     })
   }

  render () {
    let { events } = this.state
    return (
      <React.Fragment>
      
          <NavUnauth/>

          <CarouselSection/>
          < Events events={events} />

      <div className = "aboutus">
            <AboutUs/>
      </div>
      <Footer/>
      </React.Fragment>
    );
  }
}

export default UnauthenticatedApp
