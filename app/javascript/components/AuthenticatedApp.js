import React from "react"
import PropTypes from "prop-types"

import Events from './pages/Events'
import NewEvent from './NewEvent'

class AuthenticatedApp extends React.Component {
  render () {
    return (
      <React.Fragment>
        < Events />
        <a rel="nofollow" data-method="delete" href="/users/sign_out">Logout</a>
      </React.Fragment>
    );
  }
}

export default AuthenticatedApp
