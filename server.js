const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rajeshchinnaga:Lokesh$2919@fse.xeh0y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const express = require('express');
const app = express();

require('./controllers/UserController')(app);

const PORT = 4000;
app.listen(process.env.PORT || PORT);