import express from 'express'

import { auth } from '../middlewares/auth.js'
import { getHistoryLogs } from '../cotroller/historyLogController.js'

const historyLogsRouter = express.Router()
historyLogsRouter.use(auth)

historyLogsRouter.get('/', async (req, res, next) => {
  res.json(await getHistoryLogs(req.query.pageSize, req.query.page))
})

export { historyLogsRouter }
