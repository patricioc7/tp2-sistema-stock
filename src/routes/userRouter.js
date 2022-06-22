import express from 'express'
import { addNewUser, getAllUsers, login } from '../cotroller/userController.js'
import { generateToken } from '../domain/actions/jwtGenerator'

const userRouter = express.Router()

userRouter.get('/', async (req, res, next) => {
  res.json(await getAllUsers())
})

// registro, validar
userRouter.post('/', async (req, res, next) => {
  res.json(await addNewUser(req.body))
})

userRouter.post('/login', async (req, res) => {
  try {
    const user = await login(req.body.email, req.body.password)
    const token = generateToken(user)
    res.send({ token })
  } catch (error) {
    console.log(error)
    res.status(401).send(error.message)
  }
})
