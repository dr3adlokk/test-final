const express = require('express');
const path = require('path');
const hbs = require('express-handlebars')
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const ejs = require('ejs');
var app = express();
// var router = express.Router
var userindex = require ('./routes/html-routes.js')
var userroutes = require('./routes/api-routes.js')
// var index = require('./routes/index.js')



// // var middleware = require('./routes/middleware.js')(app)
// var login = require('./routes/login.js')(app)
// var join = require('./routes/join')(app)

// var member = require('./routes/member.js')(app)
// var users = require('./routes/users.js')(app)
// var join = require('./routes/join')(app)
// app.engine('html', hbs.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

// Static file configuration
app.use('/client/static', express.static(path.join(__dirname, 'client/static')));


// Return to all (/)URLs or routes index.html
app.get('/', function (req, res) {
  res.render('login.hbs');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  //set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;





