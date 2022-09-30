
import React from 'react'
import { useRouter } from 'next/router';

function ClientProjectDetail() {
    const router = useRouter();
    const query = router.query;
  
    const backHome = ()=>{
        router.push('/product')
    }

  return (
    <h1>
        Client Project {query.ClientProjectId} from Client {query.id}
        <button type="button" onClick={backHome}>Product</button>
    </h1>
  )
}
export default ClientProjectDetail