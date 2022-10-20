import React, { useRef } from 'react';
import { getSession } from 'next-auth/react';

const ChangePassword = () => {
    const oldPasswordRef = useRef();
    const newpasswordRef = useRef();
 
     const changePassword = async(oldPassword, newPassword) => {
                     const response = await fetch(`/api/user/change_password`,{
                                  method:"PATCH",
                                  body: JSON.stringify({oldPassword,newPassword}),
                                  headers: {'Content-Type': 'application/json'},
                     })
                     const data = await response.json();
                     return data;
     }

    const handleSubmit = async (e) => {
      e.preventDefault();
         const oldPassword = oldPasswordRef.current.value;
         const newPassword = newpasswordRef.current.value;
         const result = await changePassword(oldPassword, newPassword);
         console.log(result);

     } 
  return (
    <div> 
    <form onSubmit={handleSubmit}>
    <input type="password" name="password"  ref={oldPasswordRef}  placeholder="Old Password"/>
    <input type="password" name="password2" ref={newpasswordRef} placeholder="New Password" />
    <button type="submit">Submit</button>
</form></div>
  )
}


export async function getServerSideProps(context){
        const { req, res} = context;
         const session = await getSession({req:req}) 
         if(!session){
          return{
            redirect:{
              destination:"/index",
              permanent:false
           }
          }
         }       


}

export default ChangePassword