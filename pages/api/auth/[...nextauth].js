import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import { verifyPassword } from "../../../lib/auth";
import connectToDatabase from "../../../lib/db";



export default NextAuth({
    session:{
        jwt:true,
    },
    providers:[
        CredentialsProvider({
            // credentials:{email:credentials.email, password:credentials.password}
           async authorize(credentials){
             const client = await connectToDatabase()
             const userCollection = client.db().collection("users");
             const user = userCollection.findOne({ email:credentials.email });
             if(!user){
                client();
                throw new Error("User not found");
             }
              const isValid = verifyPassword(credentials.password,user.password)
             if(!isValid){
                client.close();
                throw new Error("User can not log in")
             }
             client.close();
             return {email:user.email}
            }
        })
    ]
});