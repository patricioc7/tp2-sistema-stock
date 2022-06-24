import mongodb from 'mongodb'
import 'dotenv/config'

const uri = process.env.MONGODB
// const uri = 'mongodb+srv://admin:admin@cluster0.iv181.mongodb.net/?retryWrites=true&w=majority'
const client = new mongodb.MongoClient(uri)

let instance = null

const getConnection = async () => {
  if (instance == null) {
    instance = await client.connect()
  }
  return instance
}

export { getConnection }
