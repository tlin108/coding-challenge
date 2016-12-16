import React from 'react';
import { Panel, Row } from 'react-bootstrap';
import moment from 'moment';

function EventItem({event}) {
  const eventDescription = event.description || 'No Description';
  const eventLocation = event.locations.length > 0 ? event.locations[0].name:'No Location';
  const eventStartTime = moment(event.start_time).format('MMM Do YYYY, h:mm:ss a');
  const eventEndTime = moment(event.end_time).format('MMM Do YYYY, h:mm:ss a');

  return(
    <Panel header={event.title}>
      {eventDescription}
      <hr />
      <Row>
        <span className="glyphicon glyphicon-map-marker" />
        <span className="glyphicon-class"> {eventLocation}</span>
      </Row>
      <Row>
        <span className="glyphicon glyphicon-time" />
        <span className="glyphicon-class"> Start Time: {eventStartTime} </span>
        <span className="glyphicon glyphicon-hourglass" />
        <span className="glyphicon-class"> End Time: {eventEndTime}</span>
      </Row>
    </Panel>
  )
}

export default EventItem;