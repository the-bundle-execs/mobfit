import React from 'react'
import PropTypes from "prop-types"
import { Navbar, Nav, Jumbotron, Container } from 'react-bootstrap'
import Logo from './images/mobfit.png'
import { Route, NavLink, HashRouter, BrowserRouter as Router} from "react-router-dom";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";
import { HashLink as Link } from "react-router-hash-link";
import AboutUs from "./pages/AboutUs"
import GettingStarted from "./pages/GettingStarted"


class NavUnauth extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Router>
        <Jumbotron href="#home" id="landingpage" fluid className="text-xs-center">
          <Navbar variant="navbar navbar-expand-lg navbar-dark bg-primary" className="nav-bar">
            <Navbar.Brand img src={Logo}>
              <img src={Logo}className="logo" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbuttons">
                    <Nav.Link href="#gettingstart">Lets Start!</Nav.Link>
                    <Nav.Link href="#about">About Us</Nav.Link>
                    <Nav.Link href="/users/sign_in">Login</Nav.Link><br/>
                    <Nav.Link href="/users/sign_up">Sign up</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <h1 className = "welcome"> Welcome to MobFit</h1>
        </Jumbotron>
          <Route exact path="/gettingstart" component={GettingStarted} />
          <Route exact path="/about" component={AboutUs} />
       </Router>
      </React.Fragment>
    );
  }
}

export default NavUnauth
