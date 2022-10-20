import React, { useEffect, useState } from 'react'
import ChangePassword from '../components/auth/ChangePassword';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const ChangePasswordPage = () => {
   const [ isLoading , setIsLoading ] = useState(true);
   const router = useRouter();
  useEffect(()=>{
     (async()=>{
         const session = await getSession();
         if(!session){
            router.replace('/index')
         }
         else{
          setIsLoading(false)
         }
     })()
  },[router])
    
  if(isLoading){
    return <h1>Loading ....</h1>
  }

  return (
    <div>
        <ChangePassword />
    </div>
  )
}

export default ChangePasswordPage