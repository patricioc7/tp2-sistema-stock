import bcrypt from 'bcrypt'

const salt = 8

const encryptPassword = async (password) => {
  return await bcrypt.hash(password, salt)
}

export { encryptPassword }
