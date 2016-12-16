import React from 'react';
import { PanelGroup } from 'react-bootstrap';

import EventItem from './EventItem';

function EventList({events}) {
  if (events.length === 0){
    return(
      <div>
        No result, please try again with a different search term
      </div>
    )
  }

  const EventItems = events.map(event => {
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