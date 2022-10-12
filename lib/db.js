import { MongoClient } from "mongodb";

async function connectToDatabase (){
  const url = "mongodb+srv://yayi:jdaLLFYXaM88tcIq@cluster0.cxsvaqn.mongodb.net/?retryWrites=true&w=majority";
  const client = new  MongoClient(url,{
    useNewUrlParser: true,
    useUnifiedTopology: false,
  })
  await client.connect()
  return client
}

export default connectToDatabase