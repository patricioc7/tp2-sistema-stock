import express from "express";
import {getAllStock, addNewStock, increaseQtyStock} from "../cotroller/stockController.js";

const stockRouter = express.Router();

stockRouter.get('/', async (req, res, next) => {
    res.json(await getAllStock());
});

stockRouter.post('/', async (req, res, next) => {
    res.json(await addNewStock());
});

stockRouter.put('/:stockId/increase/:qty', async (req, res, next) => {
   console.log(req.params)
    res.json(await increaseQtyStock(req.params.stockId, req.params.qty));
});

export { stockRouter };