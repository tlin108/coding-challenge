import React, { Component } from 'react';
import { Col, ControlLabel, Form, FormGroup, FormControl } from 'react-bootstrap';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onFilterTermChange(term);
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="formControlsSelect">
          <Col componentClass={ControlLabel} sm={3}>
            Filter By: 
          </Col>
          <Col sm={9}>
            <FormControl
              type="text"
              value={this.state.term}
              placeholder="Filter by ..."
              onChange={e => this.onInputChange(e.target.value)}
            />
          </Col>
        </FormGroup>
      </Form>
    )
  }
}