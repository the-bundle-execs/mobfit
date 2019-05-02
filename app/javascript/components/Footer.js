import React from 'react'
import { FaGithub } from 'react-icons/fa'

const GithubStyle = {
  fontSize: '27px'
}

class Footer extends React.Component {
  render () {
    return (
      <React.Fragment>
        <footer className="footer">
          <a href="https://github.com/the-bundle-execs/mobfit"><label className="copyrights">Copyright &copy; The Bundle Execs 2019 &nbsp;</label></a>
          < FaGithub style={GithubStyle} />
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer
