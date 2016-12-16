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

  componentDidMount() {
    fetch('https://api.eventable.com/v1/events/', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 7761e7e3b25a1d6d315901fcd7180d971f77ea2e'
      }
    })
    .then(res => res.json())
    .then(data => this.setState({events: data.results}))
    .catch(err => console.log(err))
  }

  handleFilterChange(filterTerm){
    this.setState({filterTerm});
  }

  render() {
    return (
      <div className="App container-fluid">
        <SearchBar onFilterTermChange={this.handleFilterChange}/>
      </div>
    );
  }
}

export default App;
