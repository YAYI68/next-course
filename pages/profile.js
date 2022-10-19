
import React from 'react';
import { getSession } from 'next-auth/react';
import UserProfile from '../components/auth/UserProfile';



function Profile({session}) {
  

  return (
    <div>
        <UserProfile />
    </div>
  )
}

export async function getServerSideProps(context){
    const session = await getSession({req:context.req});
    if(!session){
      return{
         redirect:{
            destination:"/index",
            permanent:false
         }
      }
    }
    return{
      props:{session}
   }
}

export default Profile