const express = require("express")
const router = express.Router();
const fs = require('fs');
const usersRoutes = require('./users.js')
router.use(usersRoutes)

module.exports = router;

