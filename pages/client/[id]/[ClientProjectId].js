
import React from 'react'
import { useRouter } from 'next/router';

function ClientProjectDetail() {
    const router = useRouter();
    const query = router.query;
  return (
    <h1>
        Client Project {query.ClientProjectId} from Client {query.id}
    </h1>
  )
}
export default ClientProjectDetail