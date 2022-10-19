import React, { useEffect, useState } from 'react';
import { getSession, useSession } from "next-auth/react"

function Profile() {
    const {data, status } = useSession();
    const [ isLoading, setIsLoading ] = useState(true);
    console.log({data})
   useEffect(()=>{
       (async()=>{
        const session = await getSession()
        console.log({session});
         if(!session){
            window.location.href ="/index";
         }else{
            setIsLoading(false);
         }
       })()

   },[])

     if(isLoading){
        return <h1>Loading...</h1>
     }

  return (
    <div>
        <h1>My Profile page</h1>
    </div>
  )
}

export default Profile