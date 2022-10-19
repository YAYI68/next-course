import React, { useEffect, useState } from 'react';
import { getSession, useSession } from "next-auth/react"

function UserProfile() {
    //  Using session from the client side
//     const {data, status } = useSession();
//     const [ isLoading, setIsLoading ] = useState(true);
    
//    useEffect(()=>{
//        (async()=>{
//         const session = await getSession()
//          if(!session){
//             window.location.href ="/index";
//          }else{
//             setIsLoading(false);
//          }
//        })()

//    },[])

//      if(isLoading){
//         return <h1>Loading...</h1>
//      }

  return (
    <div>
        <h1>My Profile page</h1>
    </div>
  )
}

export default UserProfile