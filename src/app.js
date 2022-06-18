import express from "express";
import cookieParser from "cookie-parser"
import logger from "morgan";
import createError from "http-errors"

import { indexRouter } from "./routes/indexRouter.js"
import { stockRouter } from "./routes/stockRouter.js";
import { productRouter } from "./routes/productRouter.js";
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/stock', stockRouter);
app.use('/product', productRouter);

app.use((req, res, next) => {
    next(createError(404));
});

export { app };