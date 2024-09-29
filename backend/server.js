// Nodemon -- Watches the changes in server.js so everytime we don't have to restart the server
const express = require('express')
const dotenv = require('dotenv').config()
const port = 4733

const app = express()

app.listen(port, () => console.log(`Server running at port: ${port}`))