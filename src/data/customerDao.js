import { getConnection } from './connection.js'
import { ObjectId } from 'mongodb'

const DATABASE = 'ort'
const CUSTOMER = 'customer'

const getAllCustomersFromDB = async () => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
    .collection(CUSTOMER)
    .find({})
    .toArray()
}

const addNewCustomerToDB = async (store) => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
    .collection(CUSTOMER)
    .insertOne(store)
}

const getCustomerByIdFromDb = async (customerId) => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
    .collection(CUSTOMER)
    .findOne({ _id: new ObjectId(customerId) })
}

const deleteCustomerByIdFromDb = async (storeId) => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
      .collection(CUSTOMER)
      .deleteOne({ _id: new ObjectId(storeId) })

}

export { getAllCustomersFromDB, addNewCustomerToDB, getCustomerByIdFromDb, deleteCustomerByIdFromDb }
