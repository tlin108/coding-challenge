import React, { Component } from 'react';
import { Button, Col, ControlLabel, Form, FormGroup, FormControl, Modal } from 'react-bootstrap';

export default class EventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formShow: false,
      title: '',
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
      description: '',
      locations: []
    };

  }

  onTitleChange(title) {
    this.setState({title});
  }

  onStartDateChange(startDate) {
    this.setState({startDate});
  }

  onStartTimeChange(startTime) {
    this.setState({startTime});
  }

  onEndDateChange(endDate) {
    this.setState({endDate});
  }

  onEndTimeChange(endTime) {
    this.setState({endTime});
  }

  onDescriptionChange(description) {
    this.setState({description});
  }

  onlocationsChange(locations) {
    this.setState({locations});
  }

  onFormSubmit(e) {
    e.preventDefault();
    const { title, startDate, startTime, endDate, endTime, description, locations } = this.state;
    this.props.addEvent({ title, startDate, startTime, endDate, endTime, description, locations })
    this.setState({
      formShow: false,
      title: '',
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
      description: '',
      locations: []
    });
  }

  render() {
    let formClose = () => this.setState({ formShow: false });

    return (
      <div>
        <Button bsStyle="primary" block onClick={() => this.setState({ formShow: true })}>
          Add Event
        </Button>

        <Modal show={this.state.formShow} onHide={formClose} bsSize="large" aria-labelledby="contained-modal-title-lg">
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
                    <FormControl type="text" placeholder="Enter Title Here" onChange={e => this.onTitleChange(e.target.value)} />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalStartDateTime">
                  <Col componentClass={ControlLabel} sm={2}>
                    Event Start Date: 
                  </Col>
                  <Col sm={4}>
                    <FormControl type="text" placeholder="Format (YYYY/MM/DD)" onChange={e => this.onStartDateChange(e.target.value)} />
                  </Col>
                  <Col componentClass={ControlLabel} sm={2}>
                    Event Start Time: 
                  </Col>
                  <Col sm={4}>
                    <FormControl type="text" placeholder="Format (HH:MM) e.g. 20:30" onChange={e => this.onStartTimeChange(e.target.value)} />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEndDateTime">
                  <Col componentClass={ControlLabel} sm={2}>
                    Event End Date: 
                  </Col>
                  <Col sm={4}>
                    <FormControl type="text" placeholder="Format (YYYY/MM/DD)" onChange={e => this.onEndDateChange(e.target.value)} />
                  </Col>
                  <Col componentClass={ControlLabel} sm={2}>
                    Event End Time: 
                  </Col>
                  <Col sm={4}>
                    <FormControl type="text" placeholder="Format (HH:MM) e.g. 22:30" onChange={e => this.onEndTimeChange(e.target.value)} />
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
                <FormGroup controlId="formHorizontallocations">
                  <Col componentClass={ControlLabel} sm={2}>
                    Event locations: (Optional)
                  </Col>
                  <Col sm={10}>
                    <FormControl type="text" placeholder="Enter locations Here" />
                  </Col>
                </FormGroup>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Col sm={1}>
                <Button onClick={formClose}>Close</Button>
              </Col>
              <Button type="submit" onClick={e => this.onFormSubmit(e)} >
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
      </div>
    )
  }
}