import React from 'react'
import PropTypes from "prop-types"
<<<<<<< HEAD
import EventsUnAuth from './pages/EventsUnAuth'
import CarouselSection from './CarouselSection'
import { Button, Navbar, Nav, Jumbotron,Container } from 'react-bootstrap'
import Logo from './images/mobfit.png'
import Footer from './Footer'
import NavUnauth from './NavUnauth'
import Background from './images/bkimage.jpg'
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";
import { HashLink as Link } from "react-router-hash-link";
=======

import { Button, Navbar, Nav, Jumbotron } from 'react-bootstrap'
import { Route, NavLink, HashRouter, Router} from "react-router-dom";
>>>>>>> master

import { allEvents} from './api'

import Events from './pages/Events'
import Logo from './images/mobfit.png'
import Footer from './Footer'
import NavUnauth from './NavUnauth'
import AboutUs from "./pages/AboutUs";
<<<<<<< HEAD
import Testimonial from "./pages/Testimonial";

=======
import CarouselSection from './CarouselSection'
import Background from './images/bkimage.jpg'
>>>>>>> master

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
         <ScrollableAnchor id={"about"}>
            <Jumbotron id="about" href="#about" fluid className="text-xs-center" className="aboutborder">
              <Container>
                 <AboutUs/>
              </Container>
          </Jumbotron>
        </ScrollableAnchor><br/><br/>
          <Testimonial/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default UnauthenticatedApp
