import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class NewEvent extends Component {
  constructor(props){
      super(props)
      this.state = {
          form:{
            event_name: '',
            date: '',
            time: '',
            duration: '',
            location_name: '',
            loc_latitude: '',
            loc_longitude: '',
            activity: '',
            level: '',
            max_enrollment: '',
            equipment: '',
            comments: ''
          }
      }
  }

  handleChange = (e) => {
      const { form } = this.state
      form[e.target.name] = e.target.value
      this.setState({ form: form })
  }

  submitEvent = () => {
    const { form } = this.state
    this.props.addEvent(form)
  }

    render() {
      let { form } = this.state
      return (
          <React.Fragment>
            <Form>
                  <Form.Control
                  style={{width: '200px'}}
                  type="text"
                  name="event_name"
                  onChange={this.handleChange}
                  value={form.event_name}
              />
              <Form.Label id="event_name">Event Name</Form.Label>
              <Form.Control
                  style={{width: '200px'}}
                  type="date"
                  name="date"
                  onChange={this.handleChange}
                  value={form.date}
              />
              <Form.Label id="date">Event Date</Form.Label>
              <Form.Control
                  style={{width: '200px'}}
                  type="time"
                  name="time"
                  onChange={this.handleChange}
                  value={form.time}
              />
              <Form.Label id="time">Event Time</Form.Label>
              <Form.Control
                  style={{width: '200px'}}
                  type="text"
                  name="duration"
                  onChange={this.handleChange}
                  value={form.duration}
              />
              <Form.Label id="duration">Event Duration</Form.Label>
              <Form.Control
                  style={{width: '200px'}}
                  type="text"
                  name="location_name"
                  onChange={this.handleChange}
                  value={form.location_name}
              />
              <Form.Label id="location_name">Event Location</Form.Label>
              <Form.Control
                  style={{width: '200px'}}
                  type="number"
                  name="loc_latitude"
                  onChange={this.handleChange}
                  value={form.loc_latitude}
              />
              <Form.Label id="loc_latitude">Event Latitude</Form.Label>
              <Form.Control
                  style={{width: '200px'}}
                  type="number"
                  name="loc_longitude"
                  onChange={this.handleChange}
                  value={form.loc_longitude}
              />
              <Form.Label id="loc_longitude">Event Longitude</Form.Label>
              <Form.Control
                  style={{width: '200px'}}
                  type="text"
                  name="activity"
                  onChange={this.handleChange}
                  value={form.activity}
              />
              <Form.Label id="activity">Event Activity</Form.Label>
              <Form.Control
                  style={{width: '200px'}}
                  type="text"
                  name="level"
                  onChange={this.handleChange}
                  value={form.level}
              />
              <Form.Label id="level">Recommended Fitness Level</Form.Label>
              <Form.Control
                  style={{width: '200px'}}
                  type="number"
                  name="max_enrollment"
                  onChange={this.handleChange}
                  value={form.max_enrollment}
              />
              <Form.Label id="max_enrollment">Maximum Number of Attendees</Form.Label>
              <Form.Control
                  style={{width: '200px'}}
                  type="text"
                  name="equipment"
                  onChange={this.handleChange}
                  value={form.equipment}
              />
              <Form.Label id="equipment">Event Equipment</Form.Label>
              <Form.Control
                  style={{width: '200px'}}
                  type="text"
                  name="comments"
                  onChange={this.handleChange}
                  value={form.comments}
              />
              <Form.Label id="comments">Additional Comments</Form.Label>
              <br/>
              <Button onClick={this.submitEvent} variant="btn btn-outline-success" id="submit">Create New Event</Button>
            </Form>
          </React.Fragment>
      );
    }
}
export default NewEvent;
