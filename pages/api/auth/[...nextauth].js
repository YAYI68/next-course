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
            name: "Credentials",
           async authorize(credentials){
            console.log(credentials.email)
             const client = await connectToDatabase()
             const userCollection = client.db('MyDatabase').collection("users");
             const user = await userCollection.findOne({email:credentials.email });
             if(!user){
                client.close();
                throw new Error("User not found");
             }
              const isValid = await verifyPassword(credentials.password,user.password)
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