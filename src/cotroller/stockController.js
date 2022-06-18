import {getAllStockFromDB, addNewStockFromDB, increaseStockFromDB, decreaseStockFromDB} from "../data/stockDao.js";
import {Stock} from "../domain/model/stock.js";

const getAllStock = async () => {
    return await getAllStockFromDB()
}

const addNewStock = async (body) => {
    // TODO validate ProductID and StoreID

    const stock = new Stock(
        undefined,
        body.productId,
        body.qty,
        body.storeId
    )
    return await addNewStockFromDB(stock)
}

const increaseQtyStock = async (stockId, qty) => {
    return await increaseStockFromDB(stockId, qty);
}

const decreaseQtyStock = async (stockId, qty) => {
    return await decreaseStockFromDB(stockId, qty);
}

export { getAllStock, addNewStock, increaseQtyStock, decreaseQtyStock }