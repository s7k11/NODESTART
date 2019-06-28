var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const config = require('./config/database');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// mongoose.connect('mongodb://localhost:27017/intern',{ useNewUrlParser: true }).console.log("db")
mongoose.connect(config.database);
 let db = mongoose.connection;

 db.once('open', function(){
    console.log('Connected to MongoDB');
  });


app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
