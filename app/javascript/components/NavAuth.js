import React from "react"
import PropTypes from "prop-types"
import { Navbar, Nav, Jumbotron } from 'react-bootstrap'
import Logo from './images/mobfit.png'


class NavAuth extends React.Component {

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
                <Nav.Link rel="nofollow" data-method="delete"href="/users/sign_out">Logout</Nav.Link><br/>

                </Nav>
                </Navbar.Collapse>
                </Navbar>


            </Jumbotron>

      </React.Fragment>
    );
  }
}

export default NavAuth
