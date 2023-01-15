const express = require("express")
const fs = require('fs');
const routes = require('./routes/route')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 8080;


app.use(cors({
    origin: '127.0.0.1"5500',
}));


app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/', routes)
app.all('*', (req, res) => res.status(400).send('Status: Bad Request'))
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))