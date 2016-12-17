import _ from 'lodash';
import React, { Component } from 'react';
import './App.css';
import { Col, Row } from 'react-bootstrap';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SortBar from './components/SortBar';
import EventList from './components/EventList';
import EventForm from './components/EventForm';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      events: [],
      filterTerm: '',
      sortTerm: 'start_time'
    };

    this.addEvent = this.addEvent.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
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
    .catch(err => console.log(err));
  }

  addEvent(newEvent) {
    newEvent.id = this.state.events.length;
    this.setState({
      events: [...this.state.events, newEvent]
    });
  }

  handleFilterChange(newFilterTerm) {
    const filterTerm = newFilterTerm.toLowerCase();
    this.setState({filterTerm});
  }

  handleSortChange(sortTerm) {
    this.setState({sortTerm});
  }

  filterEvents() {
    const { events, filterTerm } = this.state;
    return filterTerm ? 
      events.filter((event) => event.title.toLowerCase().includes(filterTerm)) 
      :
      events;
  }

  sortEvents(filteredEvents) {
    const { sortTerm } = this.state;
    const sortedEvents = _.sortBy(filteredEvents, [sortTerm]);
    return sortedEvents;
  }

  render() {
    const filteredEvents = this.filterEvents();
    const sortedEvents = this.sortEvents(filteredEvents);

    return (
      <div className="App container-fluid">
        <Header />
        <Row>
          <Col xs={5} xsOffset={1}>
            <SearchBar onFilterTermChange={this.handleFilterChange} />
          </Col>
          <Col xs={3}>
            <SortBar sortTerm={this.state.sortTerm} onSortTermChange={this.handleSortChange} />
          </Col>
          <Col xs={2}>
            <EventForm addEvent={this.addEvent} />
          </Col>
        </Row>
        <Row>
          <Col xs={10} xsOffset={1}>
            <EventList events={sortedEvents} /> 
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
