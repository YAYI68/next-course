import { MongoClient } from "mongodb";

async function connectToDatabase (){
  const url = "mongodb://localhost:27017";
  const client = new  MongoClient(url,{
    useNewUrlParser: true,
    useUnifiedTopology: false,
  })
  await client.connect()
  return client
}

export default connectToDatabase