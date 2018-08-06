var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//var StoreAttribService = require('./services/storeAttribute.service')
var indexRouter = require('./routes/index');
var storeRouter = require('./routes/stores');
var mongoose = require('mongoose')
var app = express();
var bodyParser = require('body-parser')
var config = require('./db/config');
var User = require('./models/user');
var AuthRouter = require('./routes/auth');
var session = require('express-session')
mongoose.connect(config.database);
app.set('superSecret', config.secret)
//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

app.use('/', indexRouter);
app.get('/',function(req,res,next){
  console.log('In here')

});
//   if (req.session.views){
//     req.session.views++;
//     res.status(200).send('Views: ' + req.session.views + ' expires: ' + req.session.cookie.maxAge / 1000)
//   } else {
//     req.session.views = 1;
//     res.status(200).send('New Dude!')
//   }
// });

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
app.use('/api', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true")

//
  next();

});
// catch 404 and forward to error handler
app.use('/api/stores', storeRouter);
app.use('/api/auth', AuthRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
// set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app

