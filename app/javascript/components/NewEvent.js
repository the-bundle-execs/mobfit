import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
//lat long
//input field
// modal?
//action... api
//reorg events??
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
//this one works
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
      return (
          <div>
            <Form>
              <Form.Control
                  style={{width: '200px'}}
                  type="text"
                  name="event_name"
                  onChange={this.handleChange}
                  value={this.state.form.name}
              />
              <Form.Label id="event_name">Event Name</Form.Label>
              <Form.Control
                  style={{width: '200px'}}
                  type="text"
                  name="date"
                  onChange={this.handleChange}
                  value={this.state.form.age}
              />
              <Form.Label id="date">Event Date</Form.Label>
              <Form.Control
                  style={{width: '200px'}}
                  type="text"
                  name="time"
                  onChange={this.handleChange}
                  value={this.state.form.enjoys}
              />
              <Form.Label id="time">Event Time</Form.Label>
              <Form.Control
                  style={{width: '200px'}}
                  type="text"
                  name="duration"
                  onChange={this.handleChange}
                  value={this.state.form.enjoys}
              />
              <Form.Label id="duration">Event Duration</Form.Label>
              <Form.Control
                  style={{width: '200px'}}
                  type="text"
                  name="location_name"
                  onChange={this.handleChange}
                  value={this.state.form.enjoys}
              />
              <Form.Label id="location_name">Event Location</Form.Label>
              <Form.Control
                  style={{width: '200px'}}
                  type="text"
                  name="loc_latitude"
                  onChange={this.handleChange}
                  value={this.state.form.enjoys}
              />
              <Form.Label id="loc_latitude">Event Latitude</Form.Label>
              <Form.Control
                  style={{width: '200px'}}
                  type="text"
                  name="loc_longitude"
                  onChange={this.handleChange}
                  value={this.state.form.enjoys}
              />
              <Form.Label id="activity">Event Longitude</Form.Label>
              <Form.Control
                  style={{width: '200px'}}
                  type="text"
                  name="loc_longitude"
                  onChange={this.handleChange}
                  value={this.state.form.enjoys}
              />
              <Form.Label id="activity">Event Activity</Form.Label>
              <Form.Control
                  style={{width: '200px'}}
                  type="text"
                  name="level"
                  onChange={this.handleChange}
                  value={this.state.form.enjoys}
              />
              <Form.Label id="level">Recommended Fitness Level</Form.Label>
              <Form.Control
                  style={{width: '200px'}}
                  type="text"
                  name="max_enrollment"
                  onChange={this.handleChange}
                  value={this.state.form.enjoys}
              />
              <Form.Label id="max_enrollment">Maximum Number of Attendees</Form.Label>
              <Form.Control
                  style={{width: '200px'}}
                  type="text"
                  name="equipment"
                  onChange={this.handleChange}
                  value={this.state.form.enjoys}
              />
              <Form.Label id="comments">Event Equipment</Form.Label>
              <Form.Control
                  style={{width: '200px'}}
                  type="text"
                  name="comments"
                  onChange={this.handleChange}
                  value={this.state.form.enjoys}
              />
              <Form.Label id="loc_longitude">Additional Comments</Form.Label>
              <br/>
              <Button onClick={this.submitEvent} variant="btn btn-outline-success" id="submit">Create New Event</Button>
                </Form>
          </div>
      );
    }
}

export default NewEvent;
