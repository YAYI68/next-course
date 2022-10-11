import { MongoClient } from "mongodb";

async function connectToDatabase (){
  const url = 'mongodb+srv://muhammed:0P0S9DXwA0Bno1ku@cluster0.ircdt1c.mongodb.net/?retryWrites=true&w=majority'
  const client = new  MongoClient(url)
   await client.connect()
   return client
}

export default connectToDatabase