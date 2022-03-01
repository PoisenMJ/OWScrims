var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./models/index');

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var scrimsRouter = require('./routes/scrims');
var overwatchRouter = require('./routes/overwatch');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/scrims/', scrimsRouter);
app.use('/overwatch', overwatchRouter);
app.use('/users', usersRouter);

module.exports = app;
