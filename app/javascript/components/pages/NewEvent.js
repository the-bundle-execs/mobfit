import React from 'react'
import { Form, Modal, Button, Container, Row, Col } from 'react-bootstrap'

class NewEvent extends React.Component {
  constructor(props){
      super(props)
      this.state = {
          show: false,
          form:{
            event_name: '',
            date: '',
            time: '',
            duration: '',
            location_name: '',
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
    const { form, show } = this.state
    this.props.addEvent(form)
    this.setState({
      show: false,
      form:{
        event_name: '',
        date: '',
        time: '',
        duration: '',
        location_name: '',
        activity: '',
        level: '',
        max_enrollment: '',
        equipment: '',
        comments: ''
      }
    })
  }

    render() {
      const { form, show } = this.state
      const { user } = this.props
      return (
        <React.Fragment>
          <Button
            onClick={() => this.setState({ show: true })}
            variant="btn btn-primary btn-lg btn-block">
            Create New Event
          </Button>

            <Modal show={show} size="lg">
              <Modal.Header>
                <div>
                <Button
                  style={{float: "right"}}
                  variant="btn btn-sm btn-outline-success"
                  onClick={() => this.setState({ show: false })}>Close
                </Button>
                  <Modal.Title style={{float: "left", width: "760px"}}>Create New Event for {user.username}</Modal.Title>
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
                       <Form.Label id="event_name">*Event Name:</Form.Label>
                       <Form.Control
                        style={{width: '200px'}}
                        type="text"
                        name="event_name"
                        onChange={this.handleChange}
                        value={form.event_name}
                       />
                     </Col>
                     <Col xs={6} md={4}>
                     <Form.Label id="date">*Event Date:</Form.Label>
                     <Form.Control
                      style={{width: '200px'}}
                      type="date"
                      name="date"
                      onChange={this.handleChange}
                      value={form.date}
                     />
                     </Col>
                   </Row><br/>
                   <Row className="show-grid">
                     <Col xs={6} md={4}>
                      <Form.Label id="time">*Event Time:</Form.Label>
                      <Form.Control
                        style={{width: '200px'}}
                        type="time"
                        name="time"
                        onChange={this.handleChange}
                        value={form.time}
                      />
                     </Col>
                     <Col xs={6} md={4}>
                     <Form.Label id="duration">*Event Duration:</Form.Label>
                       <Form.Control
                        style={{width: '200px'}}
                        type="text"
                        name="duration"
                        onChange={this.handleChange}
                        value={form.duration}
                       />
                    </Col>
                    <Col xs={6} md={4}>
                    <Form.Label id="location_name">*Event Address:</Form.Label>
                      <Form.Control
                        style={{width: '200px'}}
                        type="text"
                        name="location_name"
                        onChange={this.handleChange}
                        value={form.location_name}
                      />
                    </Col>
                  </Row><br/>
                  <Row className="show-grid">
                    <Col xs={6} md={4}>
                      <Form.Label id="activity">*Event Activity:</Form.Label>
                      <Form.Control
                        style={{width: '200px'}}
                        type="text"
                        name="activity"
                        onChange={this.handleChange}
                        value={form.activity}
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <Form.Label id="level">*Recommended Fitness Level:</Form.Label>
                      <Form.Control
                        style={{width: '200px'}}
                        type="text"
                        name="level"
                        onChange={this.handleChange}
                        value={form.level}
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <Form.Label id="max_enrollment">*Maximum Number of Attendees:</Form.Label>
                      <Form.Control
                        style={{width: '200px'}}
                        type="number"
                        name="max_enrollment"
                        min={0}
                        onChange={this.handleChange}
                        value={form.max_enrollment}
                      />
                    </Col>
                  </Row><br/>
                  <Row className="show-grid">
                    <Col xs={6} md={4}>
                      <Form.Label id="equipment">*Event Equipment:</Form.Label>
                      <Form.Control
                          style={{width: '200px'}}
                          type="text"
                          name="equipment"
                          onChange={this.handleChange}
                          value={form.equipment}
                      />
                    </Col>
                    <Col xs={12} md={8}>
                      <Form.Label id="comments">Additional Comments:</Form.Label>
                      <Form.Control
                          style={{width: '460px'}}
                          type="text"
                          name="comments"
                          onChange={this.handleChange}
                          value={form.comments}
                      />
                    </Col>
                  </Row><br/>
                  <Row className="show-grid">
                    <Col xs={6} md={4}>
                    </Col>
                    <Col xs={8} md={6}>
                      <Button
                        onClick={this.submitEvent}
                        variant="btn btn-outline-success" id="submit">
                        Create New Event & Close Modal
                      </Button>
                    </Col>
                    <Col xs={4} md={2}>
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
export default NewEvent;
