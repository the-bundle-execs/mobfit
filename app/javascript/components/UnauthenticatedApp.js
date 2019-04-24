import React from "react"
import PropTypes from "prop-types"
import Events from './pages/Events'

import { Button, Navbar, Nav, Jumbotron, Carousel  } from 'react-bootstrap'
import Logo from './images/mobfit.png'
import Image from './images/beachDay.jpg'
import Image1 from './images/forestPic.jpg'
import Image2 from './images/RopePic.jpg'

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
      <Jumbotron href="#home" id="landingpage" fluid className="text-xs-center">
          <Navbar variant="navbar navbar-expand-lg navbar-dark bg-primary" className="nav-bar">
          <Navbar.Brand img src={Logo} href="#home">
          <img src={Logo}className="logo" alt="Logo" />
          </Navbar.Brand>

              <Navbar.Brand href="#home">MobFit</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav variant="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
             <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="/users/sign_in">Login</Nav.Link><br/>
             <Nav.Link href="/users/sign_up">Sign up</Nav.Link>

              </Nav>
              </Navbar.Collapse>
              </Navbar>

             <h1 className = "welcome"> Welcome to MobFit!</h1>
          </Jumbotron>

          <Carousel className = "carousel">
               <Carousel.Item>
                 <img className= "beach-day" src={Image} alt="First Slide" />
               </Carousel.Item>
      
              <Carousel.Item>
                 <img className= "beach-day" src={Image1} alt="Second Slide" />
             </Carousel.Item>
             
             <Carousel.Item>
                <img className= "beach-day" src={Image2} alt="First Slide" />
            </Carousel.Item>
       </Carousel>
       

      <div className = "aboutus">
            <AboutUs/>
      </div>
      
      </React.Fragment>
    );
  }
}

export default UnauthenticatedApp
