import jwt from 'jsonwebtoken'

const generateToken = (user) => {
  return jwt.sign({ _id: user._id, email: user.email }, 'unaclavesupersecreta', { expiresIn: '24h' })
}

export { generateToken }
