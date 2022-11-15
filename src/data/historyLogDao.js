import { getConnection } from './connection.js'

const DATABASE = 'ort'
const HISTORY = 'historyLog'

const getAllHistoryLogsFromDB = async (pageSize, page) => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
    .collection(HISTORY)
    .find({})
    .limit(pageSize)
    .skip(pageSize * page)
    .toArray()
}

const addNewHistoryLog = async (historyLog) => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
    .collection(HISTORY)
    .insertOne(historyLog)
}


const getHistoryPagesFromDB = async () => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
      .collection(HISTORY)
      .countDocuments({})
}

export { getAllHistoryLogsFromDB, addNewHistoryLog, getHistoryPagesFromDB }
