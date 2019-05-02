import React from 'react'
import PropTypes from "prop-types"
import { FaGithub } from 'react-icons/fa'

class Footer extends React.Component {
  render () {
    return (
      <React.Fragment>
        <footer className="footer">
          <a href="https://github.com/the-bundle-execs/mobfit"></a>
          <p className="copyrights">Copyright &copy; The Bundle Execs 2019</p>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer
