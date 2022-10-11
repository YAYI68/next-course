import { hashPassword } from "../../../lib/auth";
import connectToDatabase from "../../../lib/db";


async function handler (req, res){

    if (req.method !== "POST"){
      return;
    }
    const { email, password } = req.body;
     console.log({email, password})
    if(!email || !email.includes("@") || 
    !password || password.trim().length <  7){
        res.status(422).json({ message:"Invalid email or password"})
    }

  
    
   const client = await connectToDatabase()
   const hash_password = await hashPassword(password)
   console.log({hashPassword: hash_password})
   const db = client.db('auth-demo');
   const result =  await db.collection('users').insertOne({
    email:email,
    password:hash_password,
});
client.close();
res.status(201).json({ message:" Created User Successfully"})

}

export default handler;