import { MongoClient } from "mongodb";

async function connectToDatabase (){
  const client =  MongoClient.connect('mongodb+srv://muhammed:0P0S9DXwA0Bno1ku@cluster0.ircdt1c.mongodb.net/auth-demo?retryWrites=true&w=majority')
   return client
}

export default connectToDatabase