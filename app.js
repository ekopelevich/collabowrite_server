var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var jwt = require('jsonwebtoken');

// var auth = require('./routes/auth');
var routes = require('./routes/index');
var users = require('./routes/users');
var stories = require('./routes/stories');
var contributions = require('./routes/contributions');
// var token = require('./routes/token');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//create a function that takes token off of header and verifies it

// app.use(function(req, res, next){
//   var token = req.get('Authorization');
//   if (token) {
//     token = token.substring(6);
//     // token = token.split('Basic ')[0];
//     console.log(token);
//   }
//   var parts = token.split('.');
//   if (parts.length == 3) {
//     var verify = parts[2];
//     jwt.verify((token, process.env.TOKEN_SECRET, function(err, decoded){
//       if(err) next();
//       console.log(decoded);
//       req.user = decoded;
//       next();
//     }))
//   }
//   // JSON.parse(atob(token.split(.)[1]).user);
//
//   next();
// })

app.use('/', routes);
// app.use('/auth', auth);
app.use('/users', users);
app.use('/stories', stories);
app.use('/contributions', contributions);
// app.use('/token', token);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;
