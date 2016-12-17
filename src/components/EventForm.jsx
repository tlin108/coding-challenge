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

  onlocationsChange(newLocation) {
    const location = {
      name: newLocation
    };
    this.setState({
      locations: [location]
    });
  }

  validateStartDate() {
    const { start_time } = this.state;
    const timeNow = moment().format('YYYY-MM-DD HH:mm');
    if(start_time) {
      // return success only if start_time is valid input and after time now (futuristic)
      if(moment(start_time, "YYYY-MM-DD HH:mm", true).isValid() && moment(start_time).isAfter(timeNow)) {
        return 'success';
      } else
        return 'error';
    }
    return;
  }

  validateEndDate() {
    const { end_time } = this.state;
    const start_time = moment(this.state.start_time).format('YYYY-MM-DD HH:mm');
    if(end_time) {
      // return success only if end_time is valid input and happens after start_time
      if(moment(end_time, "YYYY-MM-DD HH:mm", true).isValid() && moment(end_time).isAfter(start_time)) {
        return 'success';
      } else
        return 'error';
    }
    return;
  }

  onFormSubmit(e) {
    e.preventDefault();
    const { title, start_time, end_time, description, locations } = this.state;

    // handling empty/invalid input
    if(!title) {
      alert('Title is empty!');
      return;
    } else if (this.validateStartDate() !== 'success'){
      alert("Event start date and time is invalid! Please follow the format and make sure it's a futuristic event");
      return;
    } else if (this.validateEndDate() !== 'success'){
      alert('Event end date and time is invalid! Please check the formate and make sure it happens after start date and time');
      return;
    }

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

        <Modal 
          show={this.state.formShow} 
          onHide={formClose} 
          bsSize="large" 
          aria-labelledby="contained-modal-title-lg"
        >
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
                    <FormControl 
                      type="text" 
                      placeholder="Enter Title Here" 
                      onChange={e => this.onTitleChange(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup 
                  controlId="formHorizontalStartDateTime" 
                  validationState={this.validateStartDate()} 
                >
                  <Col componentClass={ControlLabel} sm={3}>
                    Event Start Date and Time:
                    Format YYYY-MM-DD HH:MM 
                  </Col>
                  <Col sm={9}>
                    <FormControl 
                      type="text" 
                      placeholder="e.g. 2016-12-17 20:30 & Must be a future event!" 
                      onChange={e => this.onStartDateTimeChange(e.target.value)} 
                    />
                  </Col>
                </FormGroup>
                <FormGroup 
                  controlId="formHorizontalEndDateTime" 
                  validationState={this.validateEndDate()} 
                >
                  <Col componentClass={ControlLabel} sm={3}>
                    Event End Date and Time:
                    Format YYYY-MM-DD HH:MM 
                  </Col>
                  <Col sm={9}>
                    <FormControl 
                      type="text" 
                      placeholder="e.g. 2016-12-18 22:00 & Must be after Event Start Date and Time" 
                      onChange={e => this.onEndDateTimeChange(e.target.value)} 
                    />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                  <Col componentClass={ControlLabel} sm={3}>
                    Event Description: (Optional)
                  </Col>
                  <Col sm={9}>
                    <FormControl 
                      componentClass="textarea" 
                      placeholder="Enter Description Here" 
                      onChange={e => this.onDescriptionChange(e.target.value)} 
                    />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontallocations">
                  <Col componentClass={ControlLabel} sm={3}>
                    Event locations: (Optional)
                  </Col>
                  <Col sm={9}>
                    <FormControl 
                      type="text" 
                      placeholder="Enter locations Here"
                      onChange={e => this.onlocationsChange(e.target.value)}
                    />
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