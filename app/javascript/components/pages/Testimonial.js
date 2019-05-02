import React, { Component } from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Testimonial extends Component {
  render() {
    return(
      <div>
        <blockquote class="blockquote">
        <p class="mb-0">I've been living here for for 72 years. Everyone out in the parks doin their
        yoga bothered me. How do these people find each other?? Then I overheard them say mid yoga "Mobfit
        BLAH blah BLah"... so I checked it out... And NOW I workout with them every Saturday!!!... and now YOU'RE the jealous one. </p>
        <footer class="blockquote-footer"> Agatha Rose </footer>
        <br/>
        <p class="mb-0">When Im out there kicking and punching the air with my best friend Roxy, its amazing. Zacks Power Ranger Cardio class has never been
        cancelled. Dude's next level. I love how he checks in with what we should be feeling and doesnt push us so hard as to over exert myself. Sometimes we all go out to a buffet
        afterwards because hey, we earned it!! </p>
        <footer class="blockquote-footer">Zack Taylor  </footer>
        <br/>
        <p class="mb-0">I'm new in town and needed some bros to play Ultimate Frisbee with. Being shy, I thought I would never
        find some bros. But then I saw other bros were lookin for bros just like me! Now Im bro-ing it out every other week with these bros! Thank you Mobfit</p>
        <footer class="blockquote-footer">Chad Bro </footer>
        </blockquote>
      </div>

    )
  }
}

export default Testimonial
