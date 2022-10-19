import { getSession } from "next-auth/react";
import { hashPassword, verifyPassword } from "../../../lib/auth";
import connectToDatabase from "../../../lib/db";


async function handler(req, res) {
    if(req.method !== "PATCH") {
        return;
    }
    
    const session = await getSession({req: req})
    if(!session){
        res.status(401).json({message:"user is not Aunthenticated"})
        return;
    }
    const userEmail = session.user.email;
    console.log({userEmail})
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;
    console.log({oldPassword})
    console.log({newPassword})
    const client = await connectToDatabase()
    const userCollection = client.db("MyDatabase").collection("users")
    const user = await userCollection.findOne({ email: userEmail })
    if (!user) {
        client.close();
        res.status(401).json({message:"User is not Found"})
    }

    const isValid = await verifyPassword(oldPassword,user.password)
    if (!isValid) {
        client.close();
        res.status(403).json({message:"Invalid password"})
    }
     
    const hash_password = await hashPassword(newPassword)
    const result = await userCollection.updateOne(
        {email:userEmail},
         {password:hash_password}
        )
    client.close();
    res.status(200).json({message:"password updated successfully"})
}
export default handler;