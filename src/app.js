import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import createError from 'http-errors'

import { indexRouter } from './routes/indexRouter.js'
import { stockRouter } from './routes/stockRouter.js'
import { productRouter } from './routes/productRouter.js'
import { storeRouter } from './routes/storeRouter.js'
import { customerRouter } from './routes/customerRouter.js'
import { userRouter } from './routes/userRouter.js'
import { historyLogsRouter } from './routes/historyLogsRouter.js'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/stock', stockRouter)
app.use('/product', productRouter)
app.use('/store', storeRouter)
app.use('/customer', customerRouter)
app.use('/user', userRouter)
app.use('/history', historyLogsRouter)

app.use((req, res, next) => {
  next(createError(404))
})

export { app }
