import mongodb from 'mongodb'

const uri = process.env.MONGODB;
const client = new mongodb.MongoClient(uri)

let instance = null

const getConnection = async () => {
  if (instance == null) {
    instance = await client.connect()
  }
  return instance
}

export { getConnection }
