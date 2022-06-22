import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '')
  console.log(token)
  try {
    const user = jwt.verify(token, process.env.CLAVESECRETA)
    console.log(user)
    next()
  } catch (error) {
    res.status(401).send({ err: error.message })
  }
}

export { auth }
