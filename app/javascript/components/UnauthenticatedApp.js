import React from "react"
import PropTypes from "prop-types"

import { Button, Navbar, Nav, Jumbotron } from 'react-bootstrap'
import { Route, NavLink, HashRouter, Router} from "react-router-dom";

import { allEvents} from './api'

import Events from './pages/Events'
import Logo from './images/mobfit.png'
import Footer from './Footer'
import NavUnauth from './NavUnauth'
import AboutUs from "./pages/AboutUs";
import CarouselSection from './CarouselSection'

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
        < NavUnauth />
        < CarouselSection />
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
5
