import express from "express";
import {getAllStock, addNewStock, increaseQtyStock, decreaseQtyStock} from "../cotroller/stockController.js";

const stockRouter = express.Router();

stockRouter.get('/', async (req, res, next) => {
    res.json(await getAllStock());
});

stockRouter.post('/', async (req, res, next) => {
    res.json(await addNewStock(req.body));
});

stockRouter.put('/:stockId/increase/:qty', async (req, res, next) => {
   console.log(req.params)
    res.json(await increaseQtyStock(req.params.stockId, req.params.qty));
});

stockRouter.put('/:stockId/decrease/:qty', async (req, res, next) => {
    console.log(req.params)
    res.json(await decreaseQtyStock(req.params.stockId, req.params.qty));
});

export { stockRouter };