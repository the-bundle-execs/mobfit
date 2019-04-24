import React from "react"
import PropTypes from "prop-types"
import { Modal, Button } from 'react-bootstrap'

import NewEvent from './pages/NewEvent'

class ModalForm extends React.Component {
  render () {
    const { user, show } = this.props
    return (
      <React.Fragment>
        <Modal show={show} {...this.props}>
          <Modal.Header closeButton>
            <Modal.Title>Create New Event for {user.username}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            < NewEvent addEvent={this.props.addEvent} user={user} />
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

export default ModalForm
