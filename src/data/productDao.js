import { getConnection } from './connection.js'
import { ObjectId } from 'mongodb'

const DATABASE = 'ort'
const PRODUCT = 'product'

const getAllProductsFromDB = async () => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
    .collection(PRODUCT)
    .find({})
    .toArray()
}

const addNewProductToDB = async (product) => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
    .collection(PRODUCT)
    .insertOne(product)
}

const getProductByIdFromDb = async (productId) => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
    .collection(PRODUCT)
    .findOne({ _id: new ObjectId(productId) })
}

export { getAllProductsFromDB, addNewProductToDB, getProductByIdFromDb }
