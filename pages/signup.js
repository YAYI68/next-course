import React, { useEffect, useState } from 'react'
import AuthForm from '../components/auth/AuthForm'
import Navbar from '../components/Navbar'
import { getSession } from "next-auth/react";
import { useRouter } from 'next/router';


function Signup() {
    const router = useRouter();
    const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    (async()=>{
      const session = getSession();
      if(session){
        router.replace('/profile')
      }
      else {
        setIsLoading(false);
      }
    })()
  },[router])

   if(isLoading){
    return <h1>Loading....</h1>
   }

  return (
    <div>
       <Navbar/>
        <AuthForm />
    </div>
  )
}

export default Signup