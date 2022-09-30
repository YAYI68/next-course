import React from 'react'
import EventItem from './EventItem'



function EventList({items}) {
  return (
    <div>
        <ul>
            {items.map((item,index)=>(
              <EventItem key={index} item={item} />
            ))}
        </ul>
    </div>
  )
}

export default EventList