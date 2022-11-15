import { getConnection } from './connection.js'
import { ObjectId } from 'mongodb'

const DATABASE = 'ort'
const STORE = 'store'

const getAllStoresFromDB = async () => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
    .collection(STORE)
    .find({})
    .toArray()
}

const addNewStoreToDB = async (store) => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
    .collection(STORE)
    .insertOne(store)
}

const updateStoreOnDB = async (store) => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
    .collection(STORE)
    .updateOne({ _id: new ObjectId(store._id) }, store)
}

const getStoreByIdFromDb = async (storeId) => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
    .collection(STORE)
    .findOne({ _id: new ObjectId(storeId) })
}

const deleteStoreByIdFromDb = async (storeId) => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
      .collection(STORE)
      .deleteOne({ _id: new ObjectId(storeId) })

}

export { getAllStoresFromDB, addNewStoreToDB, updateStoreOnDB, getStoreByIdFromDb, deleteStoreByIdFromDb }
