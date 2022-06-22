import express from 'express'
import {
  getAllStock,
  addNewStock,
  increaseQtyStock,
  decreaseQtyStock,
  getStockById, sellStock
} from '../cotroller/stockController.js'

const stockRouter = express.Router()

stockRouter.get('/', async (req, res, next) => {
  res.json(await getAllStock())
})

stockRouter.get('/:stockId', async (req, res, next) => {
  res.json(await getStockById())
})

stockRouter.post('/', async (req, res, next) => {
  res.json(await addNewStock(req.body))
})

stockRouter.put('/:stockId/increase/:qty', async (req, res, next) => {
  console.log(req.params)
  res.json(await increaseQtyStock(req.params.stockId, req.params.qty))
})

stockRouter.put('/:stockId/decrease/:qty', async (req, res, next) => {
  console.log(req.params)
  res.json(await decreaseQtyStock(req.params.stockId, req.params.qty))
})

stockRouter.put('/:stockId/sell/:customerId/:qty', async (req, res, next) => {
  console.log(req.params)
  res.json(await sellStock(req.params.stockId, req.params.customerId, req.params.qty))
})

export { stockRouter }
