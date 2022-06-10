import express from "express";
import cookieParser from "cookie-parser"
import logger from "morgan";
import createError from "http-errors"

import { indexRouter } from "./routes/indexRouter.js"
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

app.use((req, res, next) => {
    next(createError(404));
});

export { app };