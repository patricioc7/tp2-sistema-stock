import express from 'express'
import { addNewUser, getAllUsers, login } from '../cotroller/userController.js'
import { generateToken } from '../domain/actions/jwtGenerator.js'
import { body, validationResult } from 'express-validator'
import { auth } from '../middlewares/auth.js'

const userRouter = express.Router()

userRouter.get('/', auth, async (req, res, next) => {
  res.json(await getAllUsers())
})

userRouter.post('/',
  body('username').isEmail(),
  body('name').isString(),
  body('password').isLength({ min: 5 }),
  async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    res.json(await addNewUser(req.body))
  })

userRouter.post('/login', body('username').isEmail(),
  body('password').isString(),
  async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    try {
      const user = await login(req.body.username, req.body.password)
      const token = generateToken(user)
      res.send({ token })
    } catch (error) {
      res.status(401).send(error.message)
    }
  })

export { userRouter }
