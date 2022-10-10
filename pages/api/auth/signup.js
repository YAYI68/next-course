import { hashPassword } from "../../../lib/auth";
import connectToDatabase from "../../../lib/db";


async function handler (req, res){
    const { email, password } = req.body;

    if(email || !email.includes("@") || 
    !password || !password.trim().length <  7){
        res.status(422).json({ message:"Invalid email or password"})
    }
   const client = await connectToDatabase()
   const db = client.db();
   const hashPassword = await hashPassword(password)
   db.collection('users').insertOne({
    email:email,
    password:hashPassword,
});

res.status(201).json({ message:" Created User Successfully"})

}

export default handler;