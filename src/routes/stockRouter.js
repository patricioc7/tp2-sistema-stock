import express from 'express'
import { body, param, validationResult } from 'express-validator'
import {
  getAllStock,
  addNewStock,
  increaseQtyStock,
  decreaseQtyStock,
  getStockById, sellStock
} from '../cotroller/stockController.js'
import { auth } from '../middlewares/auth.js'

const stockRouter = express.Router()

stockRouter.use(auth)

stockRouter.get('/', async (req, res, next) => {
  res.json(await getAllStock())
})

stockRouter.get('/:stockId', async (req, res, next) => {
  res.json(await getStockById())
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

    res.json(await sellStock(req.params.stockId, req.params.customerId, req.params.qty))
  })

export { stockRouter }
