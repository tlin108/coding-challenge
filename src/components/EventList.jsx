import React from 'react';
import { Panel, PanelGroup } from 'react-bootstrap';

function EventList(props) {
  return (
    <PanelGroup defaultActiveKey="1" accordion>
      <Panel header="Panel 1" eventKey="1">Panel 1 content</Panel>
      <Panel header="Panel 2" eventKey="2">Panel 2 content</Panel>
    </PanelGroup>
  )
};

export default EventList;