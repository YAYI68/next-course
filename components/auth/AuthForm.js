import React, {useState, useRef} from 'react'

function AuthForm() {
    const [ isLogin, setIsLogin ] = useState(false)
    const emailRef = useRef()
    const passwordRef = useRef()

    async function createUser(email, password){

   const response = await fetch('/api/auth/signup',{
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: { 'Content-Type': 'application/json' },
    })
    const data = await response.json() 
    
    if(!response.ok){
        new Error(data.message || "Something went wrong")
    }
   return data  
}
   
  async function handleSubmit (e){
         e.preventDefault();
         const email = emailRef.current.value;
         const password = passwordRef.current.value;
         if(isLogin){
            console.log("user is Log In")
         }
         else{
            try{
              const result = await createUser(email,password);   
              
              console.log(result);
            }catch(error){

            }
         }

  }

  return (
    <div>
      <h1>{isLogin? "Login":"Logout"}</h1>

      <form onSubmit={handleSubmit}>
          <input type="email" name="email"  ref={emailRef} />
          <input type="password" name="password"  ref={passwordRef} />
          <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AuthForm

