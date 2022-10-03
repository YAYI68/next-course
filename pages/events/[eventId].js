import React from 'react'
import { useRouter } from 'next/router'
import { data } from '../../data/dummy';



const EventDetail = () => {
    // const router = useRouter();
    // const query = router.query;
    // const eventId = query.eventId;
    // const item = data.find((d)=>d.id === Number(eventId));

  return (
    <div>
        {/* <h2>{item.name}</h2> */}
        <h2>Event detail</h2>
    </div>
  )
}

export default EventDetail