import React, { Component } from 'react';
import { Col, ControlLabel, Form, FormGroup, FormControl } from 'react-bootstrap';

export default class SortBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      option: this.props.sortTerm
    };
  }

  onSelectChange(option) {
    this.props.onSortTermChange(option);
    this.setState({option});
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="formControlsSelect">
          <Col componentClass={ControlLabel} sm={4}>
            Sort By: 
          </Col>
          <Col sm={8}>
            <FormControl 
              componentClass="select" 
              placeholder="select"
              onChange={e => this.onSelectChange(e.target.value)}
              defaultValue={this.state.option}
            >
              <option value="title">Title</option>
              <option value="start_time">Start Time</option>
              <option value="end_time">End Time</option>
            </FormControl>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}