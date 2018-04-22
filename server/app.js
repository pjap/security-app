var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/security-app');

var index = require('./routes/index');
var users = require('./routes/users');
var karyawan = require('./routes/Karyawan');
var checkpoint = require('./routes/Checkpoint');
var gi = require('./routes/GI');
var mitra = require('./routes/Mitra');
var shift = require('./routes/Shift');
var darurat = require('./routes/KodeDarurat');
var absen = require('./routes/AbsenTransaction');
var sos = require('./routes/SosTransaction');
var patroli = require('./routes/PatroliTransaction');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/api/karyawan', karyawan);
app.use('/api/checkpoint', checkpoint);
app.use('/api/gi', gi);
app.use('/api/mitra', mitra);
app.use('/api/shift', shift);
app.use('/api/darurat', darurat)
app.use('/api/absen', absen);
app.use('/api/sos', sos);
app.use('/api/patroli', patroli);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
