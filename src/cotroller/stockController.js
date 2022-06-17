import {getAllStockFromDB, addNewStockFromDB, increaseStockFromDB} from "../data/stockDao.js";

const getAllStock = async () => {
    return await getAllStockFromDB()
}

const addNewStock = async (stock) => {
    return await addNewStockFromDB(stock)
}

const increaseQtyStock = async (stockId, qty) => {
    return await increaseStockFromDB(stockId, qty);
}

export { getAllStock, addNewStock, increaseQtyStock}