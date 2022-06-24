import { addNewUserToDB, findByCredential, getAllUsersFromDb } from '../data/userDao.js'
import { generateToken } from '../domain/actions/jwtGenerator.js'
import { encryptPassword } from '../domain/actions/passwordEncrypt.js'
import { User } from '../domain/model/user.js'
import bcrypt from 'bcrypt'

const getAllUsers = async () => {
  return await getAllUsersFromDb()
}

const addNewUser = async (body) => {
  const user = new User(body.name, body.username, await encryptPassword(body.password))
  return await addNewUserToDB(user)
}

const login = async (username, password) => {
  const user = await findByCredential(username)
  if (!user) {
    throw new Error('Credenciales no validas')
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw new Error('Credenciales no validas')
  }

  return generateToken(user)
}

export { getAllUsers, addNewUser, login }
