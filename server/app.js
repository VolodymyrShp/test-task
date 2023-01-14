const express = require("express")
const bodyParser = require("body-parser")
const fs = require('fs');
const routes = require('./routes/route')
const app = express()
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))