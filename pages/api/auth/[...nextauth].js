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
            // credentials:{email:credentials.email, password:credentials.password}
            // credentials: {
            //     email: { type: "email", },
            //     password: { type: "password" }
            //   },
           async authorize(credentials,req){
            console.log({credentials})
            console.log({req})
             const client = await connectToDatabase()
             const userCollection = client.db('MyDatabase').collection("users");
             const user = await userCollection.findOne({email:credentials.email });
             console.log({user});
             if(!user){
                client.close();
                throw new Error("User not found");
             }
              const isValid = verifyPassword(credentials.password,user.password)
             if(!isValid){
                client.close();
                throw new Error("User can not log in")
             }
            //  client.close();
             return {email:user.email}
            }
        })
    ]
});