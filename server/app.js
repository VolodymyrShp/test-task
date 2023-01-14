const express = require("express")
const fs = require('fs');
const routes = require('./routes/route')
const app = express()
const PORT = process.env.PORT || 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/', routes)
app.get('/', (req, res) => res.status(204).send('Status: No Content'))
app.all('*', (req, res) => res.status(400).send('Status: Bad Request'))
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))