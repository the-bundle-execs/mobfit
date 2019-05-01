import React from 'react'
import PropTypes from "prop-types"
import { Carousel } from 'react-bootstrap'
import Image from './images/beachDay.jpg'
import Image1 from './images/stretch.jpg'
import Image2 from './images/mfevent.jpg'
import Image4 from './images/acroyoga.jpg'
import Image5 from './images/bootcamp.jpg'


class CarouselSection extends React.Component {

  render () {
    return (
      <React.Fragment>


          <Carousel className = "carousel">
               <Carousel.Item>
                 <img className= "beach-day" src={Image} alt="First Slide" />
               </Carousel.Item>

              <Carousel.Item>
                 <img className= "beach-day" src={Image1} alt="Second Slide" />
             </Carousel.Item>

             <Carousel.Item>
                <img className= "beach-day" src={Image2} alt="First Slide" />
            </Carousel.Item>

            <Carousel.Item>
              <img className= "beach-day" src={Image4} alt="First Slide" />
            </Carousel.Item>

            <Carousel.Item>
              <img className= "beach-day" src={Image5} alt="First Slide" />
            </Carousel.Item>
       </Carousel>

      </React.Fragment>
    );
  }
}

export default CarouselSection
