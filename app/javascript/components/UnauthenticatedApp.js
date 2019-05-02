import React from 'react'
import PropTypes from "prop-types"
import { Jumbotron, Container } from 'react-bootstrap'
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";
import { allEvents} from './api'
import Events from './pages/Events'
import Logo from './images/mobfit.png'
import Footer from './Footer'
import NavUnauth from './NavUnauth'
import AboutUs from "./pages/AboutUs";
import Testimonial from "./pages/Testimonial";
import CarouselSection from './CarouselSection';
import GettingStarted from './pages/GettingStarted';

class UnauthenticatedApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      error: null,
      events: []
    }
  }

  componentWillMount = () => {
    this.showEvents()
  }

  showEvents = () => {
    allEvents()
    .then((events)=>{
      this.setState({ events })
    })
    .catch((error) => {
      this.setState({ error })
    })
  }

  render () {
    let { events } = this.state
    return (
      <React.Fragment>
        < NavUnauth />
        < CarouselSection />
        < Events events={events} /><br/>
        <ScrollableAnchor id={"gettingstart"}>
          <Jumbotron id="gettingstart" href="#gettingstart" fluid className="text-xs-center" className="gettingstart">
            <Container>
              < GettingStarted />
            </Container>
          </Jumbotron>
        </ScrollableAnchor><br/>
        < Testimonial /><br/>
        <ScrollableAnchor id={"about"}>
          <Jumbotron id="about" href="#about" fluid className="text-xs-center" className="aboutborder">
            <Container>
              < AboutUs />
            </Container>
          </Jumbotron>
        </ScrollableAnchor><br/>
        < Footer />
      </React.Fragment>
    );
  }
}

export default UnauthenticatedApp
