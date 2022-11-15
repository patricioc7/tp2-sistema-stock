import { getConnection } from './connection.js'
import { ObjectId } from 'mongodb'

const DATABASE = 'ort'
const STOCK = 'stock'

const getAllStockFromDB = async () => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
    .collection(STOCK)
    .find({})
    .toArray()
}

const getStocksPaginatedFromDB = async (pageSize, page) => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
      .collection(STOCK)
      .find({}).sort({_id:-1}).limit(pageSize).skip(pageSize * page)
      .toArray()
}

const getStockPagesFromDB = async () => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
      .collection(STOCK)
      .countDocuments({})
}

const addNewStockFromDB = async (stock) => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
    .collection(STOCK)
    .insertOne(stock)
}

const increaseStockFromDB = async (stockId, qty) => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
    .collection(STOCK)
    .updateOne(
      { _id: new ObjectId(stockId) },
      { $inc: { qty: parseInt(qty) } }
    )
}

const decreaseStockFromDB = async (stockId, qty) => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
    .collection(STOCK)
    .updateOne(
      { _id: new ObjectId(stockId) },
      { $inc: { qty: -qty } }
    )
}

const getStockByIdFromDB = async (stockId) => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
    .collection(STOCK)
    .findOne({ _id: new ObjectId(stockId) })
}

const deleteStockByIdFromDB = async (stockId) => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
    .collection(STOCK)
    .deleteOne({ _id: new ObjectId(stockId) })
}

export { getStockPagesFromDB, getAllStockFromDB, addNewStockFromDB, increaseStockFromDB, decreaseStockFromDB, getStockByIdFromDB, deleteStockByIdFromDB, getStocksPaginatedFromDB}
