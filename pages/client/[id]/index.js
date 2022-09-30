import React from 'react'
import { useRouter } from "next/router";

function ClientPage() {
    const router = useRouter();
    const query = router.query
  return (
    <div>
       <h2>Client {query.id}</h2> 
       
    </div>
  )
}

export default ClientPage;