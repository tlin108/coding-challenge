import _ from 'lodash';
import React, { Component } from 'react';
import './App.css';
import { Col, Row } from 'react-bootstrap';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import EventList from './components/EventList';

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

  handleFilterChange(newFilterTerm) {
    const filterTerm = newFilterTerm.toLowerCase();
    this.setState({filterTerm});
  }

  filterEvents() {
    const { events, filterTerm } = this.state;
    return filterTerm ? 
      events.filter((event) => event.title.toLowerCase().includes(filterTerm)) 
      :
      events;
  }

  render() {
    const filteredEvents = this.filterEvents();

    return (
      <div className="App container-fluid">
        <Header />
        <Row>
          <Col xs={6} xsOffset={1} >
            <SearchBar onFilterTermChange={this.handleFilterChange} />
          </Col>
        </Row>
        <Row>
          <Col xs={10} xsOffset={1}>
            <EventList events={filteredEvents} /> 
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
