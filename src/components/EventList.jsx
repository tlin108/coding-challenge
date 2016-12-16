import React from 'react';
import { PanelGroup } from 'react-bootstrap';

import EventItem from './EventItem';

function EventList(props) {
  if (props.events.length === 0){
    return(
      <div>
        Loading...
      </div>
    )
  }
  const EventItems = props.events.map(event => {
    return(
      <EventItem
        key={event.id}
        event={event}
      />
    )
  })
  return (
    <PanelGroup>
      {EventItems}
    </PanelGroup>
  )
};

export default EventList;