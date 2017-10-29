var express = require('express'),
mongoose = require('mongoose'),
bodyParser = require('body-parser');

/**
 * Start express on port 3000
 */
var app = express(),
port = process.env.PORT || 3000;

/**
 * Resgister user model
 */
var User = require('./api/models/users');

/**
 * Connect to mongoDB using Mongoose.
 */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/UserDB'); 

/**
 * Middleware routes for JSON body parsing, Cross domain request access.
 */
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Content-Type", "application/json");
  next();
});

/**
 * Redirect to respective routes in router,js
 */
var router = require('./api/router');
router(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);
