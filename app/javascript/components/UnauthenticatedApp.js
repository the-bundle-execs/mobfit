import React from "react"
import PropTypes from "prop-types"
import Events from './pages/Events'
import { Button, Navbar, Nav } from 'react-bootstrap'

class UnauthenticatedApp extends React.Component {
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
      <h1>Welcome to MobFit! Please sign up</h1>
      < Events/>
      <Button type="button" variant="btn btn-outline-primary">Primary</Button>
      </React.Fragment>
    );
  }
}

export default UnauthenticatedApp
