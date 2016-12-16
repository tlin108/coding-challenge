import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

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
      <form className="search-bar">
        <FormGroup>
          <FormControl
            type="text"
            value={this.state.term}
            placeholder="Filter by ..."
            onChange={e => this.onInputChange(e.target.value)}
          />
        </FormGroup>
      </form>
    )
  }
}