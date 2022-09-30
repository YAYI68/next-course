import React from 'react'
import { useRouter } from "next/router";
import Link from 'next/link';

function ClientPage() {
    const router = useRouter();
    const query = router.query

    const clientProject = [
        {id:1 , name: "Client project 1"},
        {id:2 , name: "Client project 2"}
    ]

  return (
    <div>
       <h2>Client {query.id}</h2> 
       <ul>
          {clientProject.map((project,index)=>(
            <li>
                <Link href={{
                    pathname:"[id]/[ClientProjectId]",
                    query:{id:query.id,ClientProjectId:project.id}
                }} >
                    {project.name}
                </Link>
            </li>
          ))}
       </ul>
    </div>
  )
}

export default ClientPage;