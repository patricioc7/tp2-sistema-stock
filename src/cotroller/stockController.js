import {
  getAllStockFromDB,
  addNewStockFromDB,
  increaseStockFromDB,
  decreaseStockFromDB,
  getStockByIdFromDB
} from '../data/stockDao.js'
import { Stock } from '../domain/model/stock.js'
import { doesCustomerExist, doesProductExist, doesStoreExist } from '../domain/actions/validations.js'
import { logProductSell, logIncreaseStock, logDecreaseStock } from '../domain/actions/historyLogger.js'

// TODO add filters
const getAllStock = async () => {
  return await getAllStockFromDB()
}

const addNewStock = async (body) => {
  if (!doesProductExist(body.productId) || !doesStoreExist(body.storeId)) {
    throw new Error('Product or Store not existent')
  }

  // Siempre el stock se debe inicializar con 0 así no quedan inconsistencias en los logs
  const stock = new Stock(
    body.productId,
    0,
    body.storeId
  )

  return await addNewStockFromDB(stock)
}

const getStockById = async (stockId) => {
  return await getStockByIdFromDB(stockId)
}

const increaseQtyStock = async (stockId, qty) => {
  logIncreaseStock(stockId, qty)
  return await increaseStockFromDB(stockId, qty)
}

const decreaseQtyStock = async (stockId, qty) => {
  const stock = await getStockById(stockId)

  if (stock.qty < qty) {
    throw new Error('insufficient stock')
  }

  logDecreaseStock(stockId, qty)
  return await decreaseStockFromDB(stockId, qty)
}

const sellStock = async (stockId, customerId, qty) => {
  if (!doesCustomerExist(customerId)) {
    throw new Error('Customer not existent')
  }

  logProductSell(stockId, customerId, qty)

  return await decreaseStockFromDB(stockId, qty)
}

export { getAllStock, addNewStock, increaseQtyStock, decreaseQtyStock, getStockById, sellStock }
