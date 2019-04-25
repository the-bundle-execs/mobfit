import React, { Component } from 'react'
import { Form, Modal, Button, Container, Row, Col } from 'react-bootstrap'

class EditEvent extends Component {
  constructor(props){
    super(props)
    this.state = {
      show: false,
      formUpdate:{
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
    const { formUpdate } = this.state
    formUpdate[e.target.name] = e.target.value
    this.setState({ formUpdate })
  }

  submitEvent = () => {
    const { formUpdate, show } = this.state
    console.log(formUpdate);
    this.props.editEvent(this.props.event.id)
    this.setState({ show: false, formUpdate: formUpdate })
  }

  render() {
    const { formUpdate, show } = this.state
    const { user, event } = this.props
    return (
      <React.Fragment>
      <Button
        variant="light"
        user={user}
        onClick={() => this.setState({show: true})}>Edit Event
      </Button>
        <Modal show={show}  size="lg">
          <Modal.Header>
            <div>
            <Button
              style={{float: "right"}}
              variant="btn btn-sm btn-outline-success"
              onClick={() => this.setState({show: false})}>Close
            </Button>
              <Modal.Title style={{float: "left", width: "760px"}}>Edit {event.event_name}</Modal.Title>
            </div>
          </Modal.Header>

          <Modal.Body>
            <Container>
              <Form>
                <Row className="show-grid">
                   <Col xs={6} md={4}>
                     <Form.Label>Trainer Name:</Form.Label>
                     <Form.Control
                      style={{width: '200px'}}
                      type="text"
                      name="trainer_name"
                      onChange={this.handleChange}
                      value={user.username}
                     />
                   </Col>
                   <Col xs={6} md={4}>
                     <Form.Label id="event_name">Event Name:</Form.Label>
                     <Form.Control
                      style={{width: '200px'}}
                      type="text"
                      name="event_name"
                      onChange={this.handleChange}
                      value={formUpdate.event_name}
                     />
                   </Col>
                   <Col xs={6} md={4}>
                   <Form.Label id="date">Event Date:</Form.Label>
                   <Form.Control
                    style={{width: '200px'}}
                    type="date"
                    name="date"
                    onChange={this.handleChange}
                    value={formUpdate.date}
                   />
                   </Col>
                 </Row><br/>
                 <Row className="show-grid">
                   <Col xs={6} md={4}>
                    <Form.Label id="time">Event Time:</Form.Label>
                    <Form.Control
                      style={{width: '200px'}}
                      type="time"
                      name="time"
                      onChange={this.handleChange}
                      value={formUpdate.time}
                    />
                   </Col>
                   <Col xs={6} md={4}>
                   <Form.Label id="duration">Event Duration:</Form.Label>
                     <Form.Control
                      style={{width: '200px'}}
                      type="text"
                      name="duration"
                      onChange={this.handleChange}
                      value={formUpdate.duration}
                     />
                  </Col>
                  <Col xs={6} md={4}>
                  <Form.Label id="location_name">Event Location:</Form.Label>
                    <Form.Control
                      style={{width: '200px'}}
                      type="text"
                      name="location_name"
                      onChange={this.handleChange}
                      value={formUpdate.location_name}
                    />
                  </Col>
                </Row><br/>
                <Row className="show-grid">
                  <Col xs={6} md={4}>
                    <Form.Label id="activity">Event Activity:</Form.Label>
                    <Form.Control
                      style={{width: '200px'}}
                      type="text"
                      name="activity"
                      onChange={this.handleChange}
                      value={formUpdate.activity}
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <Form.Label id="level">Recommended Fitness Level:</Form.Label>
                    <Form.Control
                      style={{width: '200px'}}
                      type="text"
                      name="level"
                      onChange={this.handleChange}
                      value={formUpdate.level}
                    />
                  </Col>
                  <Col xs={6} md={4}>
                    <Form.Label id="max_enrollment">Maximum Number of Attendees:</Form.Label>
                    <Form.Control
                      style={{width: '200px'}}
                      type="number"
                      name="max_enrollment"
                      onChange={this.handleChange}
                      value={formUpdate.max_enrollment}
                    />
                  </Col>
                </Row><br/>
                <Row className="show-grid">
                  <Col xs={6} md={4}>
                    <Form.Label id="equipment">Event Equipment:</Form.Label>
                    <Form.Control
                        style={{width: '200px'}}
                        type="text"
                        name="equipment"
                        onChange={this.handleChange}
                        value={formUpdate.equipment}
                    />
                  </Col>
                  <Col xs={12} md={8}>
                    <Form.Label id="comments">Additional Comments:</Form.Label>
                    <Form.Control
                        style={{width: '460px'}}
                        type="text"
                        name="comments"
                        onChange={this.handleChange}
                        value={formUpdate.comments}
                    />
                  </Col>
                </Row><br/>
                <Row className="show-grid">
                  <Col xs={12} md={8}>
                  <Button
                    onClick={this.submitEvent}
                    variant="btn btn-outline-success" id="submit">
                    Edit & Close
                  </Button>
                  </Col>
                  <Col xs={6} md={4}>
                    <Button
                      variant="btn btn-sm btn-outline-danger"
                      style={{float: 'right'}}
                      onClick={()=> this.props.removeEvent(event.id)}>Delete {event.event_name}!
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Container>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}
export default EditEvent;
