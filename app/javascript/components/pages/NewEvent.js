import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class NewEvent extends Component {


  newEvent = (newEventInfo) => {
  	createEvent(newEventInfo)
      .then(successEvent => {
        //props
        this.showEvents()
      })
      .catch((error) => {
        this.setState({ error })
      })

      render() {
        return (
      )
    }
  }


export default NewEvent;
