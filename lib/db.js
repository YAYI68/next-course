import { MongoClient } from "mongodb";

async function connectToDatabase (){
  const url = "mongodb+srv://muhammed:sokj2LkW1Uni55Bv@next-demo.thlws3h.mongodb.net/?retryWrites=true&w=majority";
  const client = new  MongoClient(url,{
    useNewUrlParser: true,
    useUnifiedTopology: false,
  })
  await client.connect()
  return client
}

export default connectToDatabase