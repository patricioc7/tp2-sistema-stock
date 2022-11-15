import express from 'express'
import {addNewStore, getAllStores, getStoreById, deleteStoreById} from '../cotroller/storeController.js'
import { body, validationResult } from 'express-validator'
import { auth } from '../middlewares/auth.js'

const storeRouter = express.Router()
storeRouter.use(auth)

storeRouter.get('/', async (req, res, next) => {
  res.json(await getAllStores())
})

storeRouter.post('/',
  body('name').isString(),
  async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    res.json(await addNewStore(req.body))
  })

storeRouter.get('/:id', async (req, res, next) => {
  res.json(await getStoreById(req.params.id))
})

storeRouter.delete('/:id', async (req, res, next) => {
    res.json(await deleteStoreById(req.params.id))
})

export { storeRouter }
