import Link from 'next/link'
import React from 'react'


function EventItem({item}) {
  return (
    <li>
      <Link href={`events/${item.id}`} >{item.name}</Link> 
    </li>
  )
}

export default EventItem