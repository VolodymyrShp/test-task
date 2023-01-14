const express = require("express")
const router = express.Router();
const fs = require('fs');
const usersRoutes = require('./users.js') // import account route
router.use(usersRoutes) // use account route

module.exports = router;

