import { MongoClient, ServerApiVersion } from "mongodb";

const uri: any = process.env.NEXT_PUBLIC_MONGOURI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
export async function DbConnect() {
  try {
    await client.connect();
    await client.db().command({ ping: 1 });
    console.log(" You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
