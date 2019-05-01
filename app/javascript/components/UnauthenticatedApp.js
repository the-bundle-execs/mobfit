import React from 'react'
import PropTypes from "prop-types"

import { Button, Navbar, Nav, Jumbotron,Container } from 'react-bootstrap'
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";
import { HashLink as Link } from "react-router-hash-link";

import { Route, NavLink, HashRouter, Router} from "react-router-dom";

import { allEvents} from './api'

import Events from './pages/Events'
import Logo from './images/mobfit.png'
import Footer from './Footer'
import NavUnauth from './NavUnauth'
import AboutUs from "./pages/AboutUs";
import Testimonial from "./pages/Testimonial";
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
