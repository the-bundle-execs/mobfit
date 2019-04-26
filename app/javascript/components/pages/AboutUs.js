 import React, { Component } from "react";
 import ReactDOM from 'react-dom'
 import { BrowserRouter as Router, Route, Link } from "react-router-dom";


 class AboutUs extends Component {
   render() {
     return(
       <Router>
         <div>
             <h3> About Us </h3>
                 <p>
                 At MobFit, we believe there is a better way to utilize public spaces. A more valuable, less invasive way
                 where trainers and people can come together and break a sweat!
                 We’re obsessively passionate about it, and our mission is to help people achieve it.
                 </p>
                   <ul>
                     <li>
                      <Link to = "/about/"> About US </Link>
                     </li>
                   </ul>
             <Route path="/about/" component={AboutUs} />
             </div>
         </Router>
     )
   }
 }

 export default AboutUs
