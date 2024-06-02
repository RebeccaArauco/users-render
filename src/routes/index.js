const express = require('express');
const userRouter = require('./user.router');
const router = express.Router();

// insert route here
router.use('/users', userRouter)

module.exports = router;