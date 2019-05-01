import React, { Component } from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Testimonial extends Component {
  render() {
    return(
      <div>
        <blockquote class="blockquote">
        <p class="mb-0">I am so happy to be part of my very own MobFit family.
        the dark chapters of my life whene I would wander the parks aimlessly asking if people want
        to play a sweaty game of quidditch. The people at MobFit have some serious magic going on over there.
         Now I have a community where I can bring my broom and confidently know, I wont be the only one.</p>
        <footer class="blockquote-footer"> Albus Dumbledore </footer>
        <br/>
        <p class="mb-0">I met my wife during a MobFit event. She was talking trash about my under arm throw,
        so I decided to buckle up buttercup and see if she'd be willing to share a kiwi stawberry gatorade with me.
        Next thing you know, after blinking a few times, we are now happily married and have the beginings of a Mini Mobfit family of our very own! Thanks Mobfit!!</p>
        <footer class="blockquote-footer">Tom Cruise  </footer>
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
