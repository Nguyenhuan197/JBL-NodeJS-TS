const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const createError = require('http-errors');

   
let indexRouter = require('./routes/index');
let Detail_Router = require('./routes/Detail');
let Category_Router = require('./routes/Category');
let Login_Router = require('./routes/Login');
let Rigister_Router = require('./routes/Rigister');
let Shopping_Cart_Router = require('./routes/ShoppingCart');
let Acount_Router = require ('./routes/Acount');
var app = express();   
      
    
// view engine setup
app.set('views', path.join(__dirname, 'views'));

// nếu phần views nó có nhiều đường dẫn Views nhiều hơn 1 cái thì làm theo cách dưới
// app.set('views', [
//   path.join(__dirname, 'views'),
//   path.join(__dirname, 'partials')
// ]);

// Trạng thái dữ liệu lấy bằng API của Form Node JS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const uploadFolderPath = path.join(__dirname, '..', 'Upload');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/Upload', express.static(uploadFolderPath));
    
app.use('/', indexRouter);
app.use('/Detail', Detail_Router);
app.use('/Category', Category_Router);
app.use('/Login', Login_Router);
app.use('/Rigister', Rigister_Router);
app.use('/ShoppingCart', Shopping_Cart_Router);
app.use('/Acount', Acount_Router);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
