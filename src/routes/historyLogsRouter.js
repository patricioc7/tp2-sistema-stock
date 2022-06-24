import express from 'express'
import { getAllHistoryLogs } from '../data/historyLogDao.js'
import { auth } from '../middlewares/auth.js'

const historyLogsRouter = express.Router()
historyLogsRouter.use(auth)

historyLogsRouter.get('/', async (req, res, next) => {
  res.json(await getAllHistoryLogs())
})

export { historyLogsRouter }
