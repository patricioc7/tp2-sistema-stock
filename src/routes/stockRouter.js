import express from 'express'
import { body, param, validationResult } from 'express-validator'
import {
  getAllStock,
  addNewStock,
  increaseQtyStock,
  decreaseQtyStock,
  getStockById, sellStock, deleteStockById
} from '../cotroller/stockController.js'
import { auth } from '../middlewares/auth.js'

const stockRouter = express.Router()

stockRouter.use(auth)

stockRouter.get('/', async (req, res, next) => {
  res.json(await getAllStock())
})

stockRouter.get('/:id', async (req, res, next) => {
  res.json(await getStockById(req.params.id))
})

stockRouter.post('/',
  body('productId').isMongoId(),
  body('storeId').isMongoId(),

  async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    res.json(await addNewStock(req.body))
  })

stockRouter.put('/:stockId/increase/:qty',
  param('stockId').isMongoId(),
  // para que no lleguen valores negativos
  param('qty').isInt({ min: 1 }),

  async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    res.json(await increaseQtyStock(req.params.stockId, req.params.qty))
  })

stockRouter.put('/:stockId/decrease/:qty',
  param('stockId').isMongoId(),
  // para que no lleguen valores negativos
  param('qty').isInt({ min: 1 }),

  async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    res.json(await decreaseQtyStock(req.params.stockId, req.params.qty))
  })

stockRouter.put('/:stockId/sell/:customerId/:qty',
  param('stockId').isMongoId(),
  param('customerId').isMongoId(),
  // para que no lleguen valores negativos
  param('qty').isInt({ min: 1 }),

  async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    try {
      res.json(await sellStock(req.params.stockId, req.params.customerId, req.params.qty))
    } catch (e) {
      return res.status(409).json({ errors: 'Stock insuficiente' })
    }
  })

stockRouter.delete('/:id', async (req, res, next) => {
  res.json(await deleteStockById(req.params.id))
})

export { stockRouter }
