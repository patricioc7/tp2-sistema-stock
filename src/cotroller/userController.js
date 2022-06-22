import { addNewUserToDB, findByCredential, getAllUsersFromDb } from '../data/userDao.js'
import { generatedToken } from '../domain/actions/jwtGenerator.js'

const getAllUsers = async () => {
  return await getAllUsersFromDb()
}

const addNewUser = async (user) => {
  return await addNewUserToDB(user)
}

const login = async (username, password) => {
  const user = await findByCredential(username, password)
  return generatedToken(user)
}

export { getAllUsers, addNewUser, login }
