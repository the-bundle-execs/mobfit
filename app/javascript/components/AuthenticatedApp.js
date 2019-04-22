import React from "react"
import PropTypes from "prop-types"


import Events from './pages/Events'

class AuthenticatedApp extends React.Component {
  render () {
    return (
      <React.Fragment>
        < Events/>
      </React.Fragment>
    );
  }
}

export default AuthenticatedApp
