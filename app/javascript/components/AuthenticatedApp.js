import React from "react"
import PropTypes from "prop-types"

import Events from './pages/Events'
import NewEvent from './NewEvent'

class AuthenticatedApp extends React.Component {
  render () {
    return (
      <React.Fragment>
        {this.props.current_user.is_trainer &&
          <h1>Hello trainer</h1>
        }
        {!this.props.current_user.is_trainer &&
          <h1>Hello exerciser</h1>
        }  
        < Events />
        <a rel="nofollow" data-method="delete" href="/users/sign_out">Logout</a>
      </React.Fragment>
    );
  }
}

export default AuthenticatedApp
