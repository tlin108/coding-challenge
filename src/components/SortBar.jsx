import React, { Component } from 'react';
import { Col, ControlLabel, Form, FormGroup, FormControl, Select } from 'react-bootstrap';

export default class SortBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="formControlsSelect">
          <Col componentClass={ControlLabel} sm={4}>
            Sort By: 
          </Col>
          <Col sm={8}>
            <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option value="other">...</option>
          </FormControl>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}