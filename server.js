require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

const app = express() // Creates an express aplication
app.use(express.json())
app.use(cors())

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds111244.mlab.com:11244/citizen-api`,
  { useNewUrlParser: true }
)

requireDir('./src/models') // Require every file on this directory

app.use('/api', require('./src/routes'))

app.listen(process.env.PORT || 3000)
