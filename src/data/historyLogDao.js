import { getConnection } from './connection.js'

const DATABASE = 'ort'
const HISTORY = 'historyLog'

// TODO PAGINAR
const getAllHistoryLogs = async () => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
    .collection(HISTORY)
    .find({})
    .toArray()
}

const addNewHistoryLog = async (historyLog) => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
    .collection(HISTORY)
    .insertOne(historyLog)
}

export { getAllHistoryLogs, addNewHistoryLog }
