import React, { Component } from 'react';
import { Button, Col, ControlLabel, Form, FormGroup, FormControl, Modal } from 'react-bootstrap';

export default class EventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formShow: false
    };
  }

  render() {
    let formClose = () => this.setState({ formShow: false });

    const FormModal = React.createClass({
      render() {
        return (
          <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">Add Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form horizontal>
                <FormGroup controlId="formHorizontalTitle">
                  <Col componentClass={ControlLabel} sm={2}>
                    Event Title: 
                  </Col>
                  <Col sm={10}>
                    <FormControl type="text" placeholder="Enter Title Here" />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalStartDateTime">
                  <Col componentClass={ControlLabel} sm={2}>
                    Event Start Date: 
                  </Col>
                  <Col sm={4}>
                    <FormControl type="text" placeholder="Format (YYYY/MM/DD)" />
                  </Col>
                  <Col componentClass={ControlLabel} sm={2}>
                    Event Start Time: 
                  </Col>
                  <Col sm={4}>
                    <FormControl type="text" placeholder="Format (HH:MM) e.g. 20:30" />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEndDateTime">
                  <Col componentClass={ControlLabel} sm={2}>
                    Event End Date: 
                  </Col>
                  <Col sm={4}>
                    <FormControl type="text" placeholder="Format (YYYY/MM/DD)" />
                  </Col>
                  <Col componentClass={ControlLabel} sm={2}>
                    Event End Time: 
                  </Col>
                  <Col sm={4}>
                    <FormControl type="text" placeholder="Format (HH:MM) e.g. 22:30" />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                  <Col componentClass={ControlLabel} sm={2}>
                    Event Description: (Optional)
                  </Col>
                  <Col sm={10}>
                    <FormControl componentClass="textarea" placeholder="Enter Description Here" />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalLocation">
                  <Col componentClass={ControlLabel} sm={2}>
                    Event Location: (Optional)
                  </Col>
                  <Col sm={10}>
                    <FormControl type="text" placeholder="Enter Location Here" />
                  </Col>
                </FormGroup>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Col sm={1}>
                <Button onClick={this.props.onHide}>Close</Button>
              </Col>
              <Button type="submit">
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        );
      }
    });

    return (
      <div>
      <Button bsStyle="primary" block onClick={() => this.setState({ formShow: true })}>
        Add Event
      </Button>

      <FormModal show={this.state.formShow} onHide={formClose} />
      </div>
    )
  }
}