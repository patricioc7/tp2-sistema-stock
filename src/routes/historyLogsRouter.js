import express from 'express'

import { auth } from '../middlewares/auth.js'
import {getHistoryLogs, getHistoryPages} from '../cotroller/historyLogController.js'


const historyLogsRouter = express.Router()
historyLogsRouter.use(auth)

historyLogsRouter.get('/', async (req, res, next) => {
  res.json(await getHistoryLogs(req.query.pageSize, req.query.page))
})

historyLogsRouter.get('/pages', async (req, res, next) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize): 0;
  res.json(await getHistoryPages(pageSize))
})
export { historyLogsRouter }
