import React from 'react';
import { signOut, useSession } from "next-auth/react"

const Navbar = () => {
    const { data: session, status } = useSession()
  return (
    <div>
        <ul>
            { !session &&  
            <li>Login</li>
            }
            {session &&
            <>   
            <li>Profile</li>
            <li> <button type="" onClick={()=>signOut()}>Logout</button></li>
            </>
            }
        </ul>
    </div>
  )
}

export default Navbar