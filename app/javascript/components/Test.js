import React from "react"
import PropTypes from "prop-types"
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Apartment from './pages/Apartment'
import NewApartment from './pages/NewApartment'
class AuthenticatedApp extends React.Component {
  render () {

    return (

      <React.Fragment>
       <Router>
        <div>
          <Switch>
            <Route path="/protected" component={Apartment} />
          </Switch>
          <Route path="/protected" component={NewApartment} />
        </div>
      </Router>
      </React.Fragment>
    );
  }
}

export default AuthenticatedApp
