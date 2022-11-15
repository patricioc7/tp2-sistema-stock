import express from 'express'
import { body, validationResult } from 'express-validator'

import { addNewCustomer, getAllCustomers, getCustomerById, deleteCustomerById} from '../cotroller/customerController.js'
import { auth } from '../middlewares/auth.js'


const customerRouter = express.Router()
customerRouter.use(auth)

customerRouter.get('/', async (req, res, next) => {
  res.json(await getAllCustomers())
})

customerRouter.post('/',
  body('name').isString(),
  async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    res.json(await addNewCustomer(req.body))
  })

customerRouter.get('/:id', async (req, res, next) => {
  res.json(await getCustomerById(req.params.id))
})

customerRouter.delete('/:id', async (req, res, next) => {
    res.json(await deleteCustomerById(req.params.id))
})

export { customerRouter }
