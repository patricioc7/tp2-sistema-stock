import express from 'express'
import { addNewStore, getAllStores, updateStore } from '../cotroller/storeController.js'

const storeRouter = express.Router()

storeRouter.get('/', async (req, res, next) => {
  res.json(await getAllStores())
})

storeRouter.post('/', async (req, res, next) => {
  res.json(await addNewStore(req.body))
})

storeRouter.put('/:id', async (req, res, next) => {
  res.json(await updateStore(req.body))
})

export { storeRouter }
