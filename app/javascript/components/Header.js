import React from 'react'
import PropTypes from "prop-types"

class Header extends React.Component {
  render () {
    const { user } = this.props
    return (
      <React.Fragment>
        <h1>Welcome, {user.username}!</h1>
      </React.Fragment>
    );
  }
}

export default Header
