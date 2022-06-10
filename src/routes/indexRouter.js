import express from "express";

const indexRouter = express.Router();

indexRouter.get('/', (req, res, next) => {
    res.json({title: 'Sistema de Stock'});
});

export { indexRouter };