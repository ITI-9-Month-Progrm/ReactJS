const express = require('express');
const userRouter = require('./student');

const apiRouter = express.Router();

apiRouter.use('/student', userRouter);

module.exports = apiRouter;