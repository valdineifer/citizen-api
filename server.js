const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express(); // Creates an express aplication
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/cidadao-api', { useNewUrlParser: true });

requireDir('./src/models'); // Require every file on this directory

app.use('/api', require('./src/routes'));

app.listen(3001);