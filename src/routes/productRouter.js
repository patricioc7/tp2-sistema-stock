import express from 'express'
import { body, validationResult } from 'express-validator'
import { addNewProduct, getAllProducts, getProductById } from '../cotroller/productController.js'
import { auth } from '../middlewares/auth.js'

const productRouter = express.Router()
productRouter.use(auth)

productRouter.get('/', async (req, res, next) => {
  res.json(await getAllProducts())
})

productRouter.post('/',
  body('name').isString(),
  body('sku').isString(),
  async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    res.json(await addNewProduct(req.body))
  })

productRouter.get('/:id', async (req, res, next) => {
  res.json(await getProductById(req.params.id))
})

export { productRouter }
