import express from 'express'
import { addNewCustomer, getAllCustomers, updateCustomer } from '../cotroller/customerController.js'

const customerRouter = express.Router()

customerRouter.get('/', async (req, res, next) => {
  res.json(await getAllCustomers())
})

customerRouter.post('/', async (req, res, next) => {
  res.json(await addNewCustomer(req.body))
})

customerRouter.put('/:id', async (req, res, next) => {
  res.json(await updateCustomer(req.body))
})

export { customerRouter }
