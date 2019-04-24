import React, { Component } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'

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
      const { form } = this.state
      const { user, show } = this.props
      return (
          <React.Fragment>
            <Modal show={show}>
              <Modal.Header>
                <div>
                <Button
                  style={{float: "right"}}
                  variant="btn btn-sm btn-outline-success"
                  onClick={this.props.onHide}>Close
                </Button>
                  <Modal.Title style={{float: "left", width: "400px"}}>Create New Event for {user.username}</Modal.Title>
                </div>
              </Modal.Header>

              <Modal.Body>
                <Form>
                  <Form.Control
                      style={{width: '200px'}}
                      type="text"
                      name="trainer_name"
                      onChange={this.handleChange}
                      value={this.props.user.username}
                  />
                  <Form.Label>Trainer Name</Form.Label>
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
                  <Button
                    onClick={this.submitEvent}
                    variant="btn btn-outline-success" id="submit">
                    Create New Event
                  </Button>
                </Form>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  variant="btn btn-sm btn-outline-success"
                  onClick={this.props.onHide}>Close Modal
                </Button>
              </Modal.Footer>
            </Modal>
          </React.Fragment>
      );
    }
}
export default NewEvent;
