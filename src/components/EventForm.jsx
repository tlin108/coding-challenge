import React, { Component } from 'react';
import { Button, Col, ControlLabel, Form, FormGroup, FormControl, Modal } from 'react-bootstrap';
import moment from 'moment';

export default class EventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formShow: false,
      title: '',
      start_time: '',
      end_time: '',
      description: '',
      locations: []
    };

  }

  onTitleChange(title) {
    this.setState({title});
  }

  onStartDateTimeChange(start_time) {
    this.setState({start_time});
  }

  onEndDateTimeChange(end_time) {
    this.setState({end_time});
  }

  onDescriptionChange(description) {
    this.setState({description});
  }

  onlocationsChange(locations) {
    this.setState({locations});
  }

  validateStartDate() {
    const { start_time } = this.state;
    if(start_time) {
      if(moment(start_time).isValid()) {
        return 'success';
      } else
        return 'error';
    }
    return;
  }

  validateEndDate() {
    const { end_time } = this.state;
    if(end_time) {
      if(moment(end_time).isValid()) {
        return 'success';
      } else
        return 'error';
    }
    return;
  }

  onFormSubmit(e) {
    e.preventDefault();
    const { title, start_time, end_time, description, locations } = this.state;
    this.props.addEvent({ title, start_time, end_time, description, locations })
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
                  <Col componentClass={ControlLabel} sm={3}>
                    Event Title: 
                  </Col>
                  <Col sm={9}>
                    <FormControl type="text" placeholder="Enter Title Here" onChange={e => this.onTitleChange(e.target.value)} />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalStartDateTime" validationState={this.validateStartDate()} >
                  <Col componentClass={ControlLabel} sm={3}>
                    Event Start Date and Time: 
                  </Col>
                  <Col sm={9}>
                    <FormControl type="text" placeholder="Format YYYY-MM-DD HH:MM e.g. 2016-12-17 20:30" onChange={e => this.onStartDateTimeChange(e.target.value)} />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEndDateTime" validationState={this.validateEndDate()} >
                  <Col componentClass={ControlLabel} sm={3}>
                    Event End Date and Time: 
                  </Col>
                  <Col sm={9}>
                    <FormControl type="text" placeholder="Format YYYY-MM-DD HH:MM e.g. 2016-12-18 22:00" onChange={e => this.onEndDateTimeChange(e.target.value)} />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                  <Col componentClass={ControlLabel} sm={3}>
                    Event Description: (Optional)
                  </Col>
                  <Col sm={9}>
                    <FormControl componentClass="textarea" placeholder="Enter Description Here" onChange={e => this.onDescriptionChange(e.target.value)} />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontallocations">
                  <Col componentClass={ControlLabel} sm={3}>
                    Event locations: (Optional)
                  </Col>
                  <Col sm={9}>
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