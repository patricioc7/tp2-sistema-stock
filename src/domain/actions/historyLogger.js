import { HistoryLog } from '../model/historyLog.js'
import { addNewHistoryLog } from '../../data/historyLogDao.js'

const logProductSell = async (stockId, customerId, qty) => {
  const log = new HistoryLog(new Date(), 'sell', stockId, qty, customerId)
  await addNewHistoryLog(log)
}

const logIncreaseStock = async (stockId, qty) => {
  const log = new HistoryLog(new Date(), 'increase',  stockId, qty, undefined)
  await addNewHistoryLog(log)
}

const logDecreaseStock = async (stockId, qty) => {
  const log = new HistoryLog(new Date(), 'decrease',  stockId, qty, undefined)
  await addNewHistoryLog(log)
}

export { logProductSell, logIncreaseStock, logDecreaseStock }
