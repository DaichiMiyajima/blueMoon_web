var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: '' });
});

router.get('/googlead6331586cdd355c', function(req, res, next) {
	res.render('googlead6331586cdd355c');
});

module.exports = router;
