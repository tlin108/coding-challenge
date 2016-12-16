import _ from 'lodash';
import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      events: [],
      filterTerm: ''
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(filterTerm){
    this.setState({filterTerm});
  }

  render() {
    return (
      <div className="App">
        <SearchBar onFilterTermChange={this.handleFilterChange}/>
      </div>
    );
  }
}

export default App;
