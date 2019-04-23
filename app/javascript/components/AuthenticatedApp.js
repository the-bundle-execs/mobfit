import React from "react"
import PropTypes from "prop-types"

import Events from './pages/Events'
import NewEvent from './pages/NewEvent'

class AuthenticatedApp extends React.Component {
  render () {
    let { current_user } = this.props
    return (
      <React.Fragment>
        {current_user.is_trainer &&
          <h1>Hello trainer</h1>
          < NewEvent addEvent={this.newEvent} user={current_user}/>
        }
        {!current_user.is_trainer &&
          <h1>Hello exerciser</h1>
        }
        < Events />
        <a rel="nofollow" data-method="delete" href="/users/sign_out">Logout</a>
      </React.Fragment>
    );
  }
}

export default AuthenticatedApp
