import React from "react"
import PropTypes from "prop-types"
import Events from './pages/Events'

class UnauthenticatedApp extends React.Component {
  render () {
    return (
      <React.Fragment>
      <h1>Welcome to MobFit! Please sign up</h1>
      < Events/>
      </React.Fragment>
    );
  }
}

export default UnauthenticatedApp
