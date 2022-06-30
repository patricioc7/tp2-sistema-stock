import { getAllHistoryLogsFromDB } from '../data/historyLogDao.js'

const getHistoryLogs = async (pageSize, page) => {
  return await getAllHistoryLogsFromDB(parseInt(pageSize), parseInt(page))
}

export { getHistoryLogs }
