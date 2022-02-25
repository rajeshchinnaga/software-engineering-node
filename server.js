/**
 * @file Implements an Express Node HTTP server. Declares RESTful Web services
 * enabling CRUD operations on the following resources:
 * <ul>
 *     <li>users</li>
 * </ul>
 *
 * Connects to a remote MongoDB instance hosted on the Atlas cloud database
 * service
 */

const mongoose = require('mongoose');
//build the connection string and connect to the database.
mongoose.connect('mongodb+srv://rajeshchinnaga:Lokesh$2919@fse.xeh0y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const express = require('express');
const app = express();

require('./controllers/UserController')(app);

/**
 * Start a server listening at port 3000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = 3000;
app.listen(process.env.PORT || PORT);