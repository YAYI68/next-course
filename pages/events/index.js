import React from 'react'
import EventList from '../../components/events/EventList'
import { data } from '../../data/dummy'



function EventPage() {
  return (
    <div>
        <h2>All Event Page</h2>
        <EventList items={data} />
    </div>
  )
}

export default EventPage