import express from "express";
import {addNewProduct, getAllProducts, updateProduct} from "../cotroller/productController.js";

const productRouter = express.Router();

productRouter.get('/', async (req, res, next) => {
    res.json(await getAllProducts());
});

productRouter.post('/', async (req, res, next) => {
    res.json(await addNewProduct(req.body));
});

productRouter.put('/:id', async (req, res, next) => {
    res.json(await updateProduct(req.body));
});

export { productRouter }