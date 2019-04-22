import React from "react"
import PropTypes from "prop-types"
import Events from './pages/Events'

class UnauthenticatedApp extends React.Component {
  render () {
    return (
      <React.Fragment>
      <h1>Welcome to MobFit!</h1>
      <h4>Please Login to Continue</h4>
      <a href="/users/sign_in">Login</a><br/>
      <a href="/users/sign_up">Sign up</a>
      < Events/>
      </React.Fragment>
    );
  }
}

export default UnauthenticatedApp
