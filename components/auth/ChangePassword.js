import React, { useRef } from 'react'

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

export default ChangePassword