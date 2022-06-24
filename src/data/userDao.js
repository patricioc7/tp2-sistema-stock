import { getConnection } from './connection.js'

const DATABASE = 'ort'
const USER = 'user'

const getAllUsersFromDb = async () => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
    .collection(USER)
    .find({})
    .toArray()
}

const addNewUserToDB = async (user) => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
    .collection(USER)
    .insertOne(user)
}

const findByCredential = async (username) => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
    .collection(USER)
    .findOne({ username })
}

export { getAllUsersFromDb, findByCredential, addNewUserToDB }
