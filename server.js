const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const uri = "Bd<here>";
mongoose.connect( uri, { useNewUrlParser: true } );

requireDir('./src/models');

// Rotas
app.use('/api', require("./src/routes"))

app.listen(3000)