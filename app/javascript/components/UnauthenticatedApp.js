import React from "react"
import PropTypes from "prop-types"
import Events from './pages/Events'
import { Button, Navbar, Nav, Jumbotron, Carousel  } from 'react-bootstrap'
import Logo from './images/mobfit.png'
import Image from './images/beachDay.jpg'


class UnauthenticatedApp extends React.Component {
  render () {
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
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="/users/sign_in">Login</Nav.Link><br/>
           <Nav.Link href="/users/sign_up">Sign up</Nav.Link>

          </Nav>
          </Navbar.Collapse>
          </Navbar>;
        
        <h1>Welcome to MobFit!</h1>
        <h4>Please Login to Continue</h4>
       </Jumbotron>
       
       <Carousel>
  <Carousel.Item>
    <img className= "beach-day" src={Image} alt="First Slide" />
    
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src=""
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>;

      </React.Fragment>
    );
  }
}

export default UnauthenticatedApp
