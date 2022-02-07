const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rajesh-db');
const express = require('express');
const app = express();

require('./controllers/UserController')(app);

const PORT = 4000;
app.listen(PORT);