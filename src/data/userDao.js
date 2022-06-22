import { getConnection } from './connection.js'
import bcrypt from 'bcrypt'

const DATABASE = 'ort'
const USER = 'user'
const salt = 8

const getAllUsersFromDb = async () => {
  const conn = await getConnection()
  return await conn.db(DATABASE)
    .collection(USER)
    .find({})
    .toArray()
}

const addNewUserToDB = async (user) => {
  user.passowrd = await bcrypt.hash(user.passowrd, salt)
  const conn = await getConnection()
  return await conn.db(DATABASE)
    .collection(USER)
    .insertOne(user)
}

const findByCredential = async (username, password) => {
  const conn = await getConnection()
  const user = await conn.db(DATABASE)
    .collection(USER)
    .findOne({ username })

  if (!user) {
    throw new Error('Credenciales no validas')
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw new Error('Credenciales no validas')
  }

  return user
}


export { getAllUsersFromDb, findByCredential, addNewUserToDB }
