const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const createError = require('http-errors');
   
let indexRouter = require ('./routes/index');
let InpomationRouter = require ('./routes/Inpomation');
let ProductRouter = require ('./routes/Product');
let CategoryRouter =  require ('./routes/Category');
let User_ClineRouter = require ('./routes/User');
let AdminRouter = require ('./routes/Admin');
let Statistical_Router = require ('./routes/Statistical');
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


app.use ('/', indexRouter);
app.use ('/Inpomation', InpomationRouter); // trạng thái đơn hàng
app.use ('/Product', ProductRouter);
app.use ('/Category', CategoryRouter);
app.use ('/User' , User_ClineRouter);
app.use ('/Admin' , AdminRouter);
app.use ('/Statistical', Statistical_Router);



   



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
