import { getAllHistoryLogsFromDB, getHistoryPagesFromDB } from '../data/historyLogDao.js'

const getHistoryLogs = async (pageSize, page) => {
  return await getAllHistoryLogsFromDB(parseInt(pageSize), parseInt(page))
}

const getHistoryPages = async (pageSize) => {
  const documentsQty =  await getHistoryPagesFromDB(parseInt(pageSize))
  return Math.ceil(documentsQty / parseInt(pageSize));
}

export { getHistoryLogs, getHistoryPages }
