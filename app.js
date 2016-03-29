var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');
var xml = require('xml');
var xml2js = require('xml2js');
var fs = require('fs');

var index = require('./routes/index');
var appform = require('./routes/appform');
var work = require('./routes/work');
var contact = require('./routes/contact');
var adminwork = require('./routes/adminwork');
var moonart = require('./routes/moonart');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//  拡張子 htm,htmlのテンプレートエンジンを指定
//app.engine('htm', require('ejs').renderFile);  　//  <--追加
//app.engine('html', require('ejs').renderFile);   //　<--追加


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/html5',express.static(__dirname + '/html5'));
app.use('/public',express.static(__dirname + '/public'));
app.use('/views/assets',express.static(__dirname + '/views/assets'));
//app.use(multer({dest:'../public/uploadfiles/'}));

app.use('/', index);
app.post('/appform', appform);
app.get('/work', work);
app.get('/contact', contact);
app.get('/moonart', moonart);
app.get('/adminwork', adminwork);
app.post('/insertWork', adminwork);

app.listen(3001);


app.get('/sitemap.xml', function(req, res) {
	var parser = new xml2js.Parser();
	fs.readFile(__dirname + '/views/sitemap.xml', function (err, data) {
		parser.parseString(data, function (err, result) {
		res.send(result);
		});
	});
	
});

app.get('/robot.txt', function(req, res) {
	var parser = new xml2js.Parser();
	fs.readFile(__dirname + '/robot.txt', function (err, data) {
		
		res.send(data);
		
	});
	
});

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
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});


module.exports = app;
